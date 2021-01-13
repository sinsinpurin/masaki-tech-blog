---
title: Ethernaut 全22問を解いてみた (0.Hello Ethernaut ~ 22.Shop)
date: "2021-1-10"
---

# はじめに

Ethereum 版 CTF の Ethernaut の 2020/8/5 現在出ている(0~22)まで解きました。
雑にメモっぽく書いているが、全ての問題を解説している日本語記事がないため
これから Ethernaut を解く人向けに共有します。

基本的には solidity v0.4.x の問題をときました。
shop は solidity v0.4.12 の問題が 404 だったので v0.5.0 の問題をときました
(Ethereum のアプデでクリアはできなかったけども)

# 0. Hello Ethernaut

ここは解説する必要なし
言われた通りに入力するだけ

# 1. Fallback

owner アドレスに自分のアドレスが入ればクリア
fallback 関数の条件をクリアして呼び出すと owner の書き換えが可能

fallback 関数内の
`contributions[msg.sender] > 0`をクリアするため`contribute()`を呼び出して条件をクリアさせる
そのあと、fallback 関数を呼び出す。

# 2. Fallout

これは solidity v0.5.0 以前に発生しうる脆弱性
constructor のスペルミスで普通の関数になっている
`Fal1out()`を呼び出すだけ

# 3. Coinflip

乱数に見せかけて同じコントラクトを書いて実行すると同じ値が出る
そのため事前に計算するコントラクトを作成
その結果をもとに問題のコントラクトを実行すると 10 問でも何問でも正解できる

# 4. Telephone

msg.sender -> EOA とコントラクトの二つのアドレスが入る
tx.origin -> EOA アドレスのみ

例えば

Bob の EOA -> AContract -> BContract

BContract からすると
msg.sender は AContract
tx.origin は Bob の EOA

tx.origin はセキュリティ上問題があるため、非推奨
tx.origin の情報が知りたい場合はコントラクトにその情報を送る必要がある

# 5. Token

典型的なオーバーフロー脆弱性
solidity にはマイナスの概念がないため
uint256 の場合
2^256 が max だがそれに＋ 1 すると０に戻る
0 から-1 を引くと 2^256 になるため

`balances[msg.sender] - _value >= 0`の value は 20 以上を入れればクリアできる。
また自分のアドレスにオーバーフローした大量のトークンが追加される。

# 6. Delegate

msg.data を作成する。

```js

> await contract.sendTransaction({ data: web3.sha3("Method") })
```

# 7. Force

solidity の SelfDestruct(非推奨)

- コントラクトを使用不可にするときに使われる
- そのコントラクトにある分の Eth を宛先に送信する。このとき宛先の fallback 関数は呼び出されない。
- fallback 関数が non-payable でも送信できてしまう。

OpenZeppelin の Pausable コントラクトなどで使用できないようにするのが推奨されている。

```js

pragma solidity ^0.6.12;

contract KillContract {
    fallback() external payable {}
    // payableで宣言
    address payable sendEthAddress;

    constructor(address payable _sendEthAddress) public {
        sendEthAddress = _sendEthAddress;
    }

    function kill() public {
        selfdestruct(sendEthAddress);
    }
}
```

# 8. Vault

password など、公開したくない情報はいれることができない
伝搬し格納したデータを参照すれば private で宣言している変数内も見えてしまう。

web3 の getStorageAt を使うと内容がわかってしまう。

テキトーなプロジェクトを作って web3 を動かしてみた

```js
web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/プロジェクトID",
  ),
);
```

```js
this.web3.eth
  .getStorageAt("0xf72902f76ed2421949714333816759a55afb10cd", 1)
  .then((hexPassword) => {
    console.log(this.web3.utils.hexToAscii(hexPassword));
  });
```

# 9. King

例外が発生すると king が変更できなくなる。
意図的に例外が発生するようにする

送信するコントラクト先が payable かどうかのチェックが行われないといけない

```js
// メソッドの引数に{value: ***}でpayableな関数にイーサを送金できる
HackKing.deployed().then((instance) => instance.Attack({ value: 100000 }));
```

# 10. Re-Entrancy

外部の payable なメソッドにイーサを送る

```js
abstract contract Reentrance{
    function donate(address _to)public payable{}
}
contract ReEntrancyAttack {
    Reentrance reentrance = Reentrance(AttackAddress);
    reentrance.donate{value:AttackAmount}(address(this));
}
```

# 11. Elevator

処理の戻り値が常に同じとは変わらない(実行するとスイッチのように On,Off する場合がある)

```js
    function isLastFloor(uint256 _floor) public returns (bool) {
        top =!top;
        return top;
    }
```

抽象コントラクトは view,pure の制約を許してしまう
抽象コントラクトを作成するときは注意

作成者は view 関数なので戻り値は同じだと思い、二度目の呼び出しをした。

# 12. Privacy

Storage に格納されているデータを解析する

```js

for(int i = 0; i < 10; i++){
  this.web3.eth.getStorageAt(" *** address ***",i).then(storage => console.log(i+")"+storage));
}
```

```
//結果
0)0x0000000000000000000000000000000000000000000000000000008a14ff0a01
1)0x6edb24b480ae1417f6870f37041354a8b4705c24943f53326193f072a938beae
2)0x8c552e818e1df3385dc4a7592ae2393dc5a09f30f5ae8b71d5ed72717c601cf1
3)0x66caf7bad73696d6aa449706ea09bfc8e19c9c7c00a1b9cb9c3e4411581a504f
```

- ストレージスロットは 32bytes
- Storage は 32byte 未満の変数は同じ可能であれば 1 スロットにまとめて格納される

8bit => 1byte
1byte => 16 進数で二桁になる

```js

 bool public locked = true;
  uint256 public constant ID = block.timestamp;
  uint8 private flattening = 10;
  uint8 private denomination = 255;
  uint16 private awkwardness = uint16(now);
  bytes32[3] private data;
```

|     型     |      格納       | 格納された数値 |
| :--------: | :-------------: | :------------: |
|    bool    |      true       |       01       |
|  uint256   | block.timestamp |  -(constant)   |
|   uint8    |       10        |       0a       |
|   uint8    |       255       |       ff       |
|   uint16   |   uint8(now)    |      8a14      |
| bytes32[3] |        ?        |   slot[1~3]    |

`0x66caf7bad73696d6aa449706ea09bfc8e19c9c7c00a1b9cb9c3e4411581a504f`

16byte にキャストするから先頭半分

# 13. Gatekeeper One

Gate1 はコントラクトから呼び出しにすれば ok

Gate2 は debug しながら`Gas%8191=0`になるように設定する
筆者はうまくできなかったので 120 回 for 文で総当たりしてやった
(debug した時の gas 代が MetaMask の方で勝手に書き換えられちゃう?それとも GasLimit がちゃんと設定できてないのかも。。。)

```

* bytes8(_gateKey)
gateOne => msg.senderとtx.originを別に (別コントラクトから呼び出し)
gateTwo => ガスが8191で割り切って0になる (ガス指定)
gateThree =>
- uint32(_gateKey)とuint16(_gateKey)の結果が同じ
- uint32(_gateKey)とuint64(_gateKey)の結果が違う
- uint32(_gateKey)とuint16(tx.origin)の結果が同じ
```

条件を突破すれば Gate3 クリア

uint16 - 16bit で整数を格納(符号なし)
1 byte => 二桁の 16 進数

uint16(tx.origin) = '61502'(16bytes) => 0xF0 3E
uint16(\_gateKey) => 0xF0 3E
uint32(\_gateKey) => 61502 =>　 0x00 00 F0 3E
uint32(\_gateKey) =! uint64(\_gateKey)なので
uint64(\_gateKey) => 0x00 00 00 01 00 00 F0 3E

uint64 => 8byte
\_gateKey = `0x111000000000F03E`

# 14. GateKeeper Two

Gate1 はコントラクトから問合せでクリア
Gate2 は

```js

  modifier gateTwo() {
    uint x;
    assembly { x := extcodesize(caller) }
    require(x == 0);
    _;
  }
```

Assembly を読む。
extcodesize(a) -> size of the code at address a(a アドレスのコードサイズ)
caller -> call sender(呼び出し元)

つまり、呼び出し元はコードサイズが 0 であるなら ok
デプロイ後、実行するとデータサイズは 0 ではない

コードサイズが 0 は

<font color="red">
  コードが完全に push されていない、コンストラクタの中での実行
</font>
で実現する。

gate3 は

```js

  modifier gateThree(bytes8 _gateKey) {
    require(uint64(keccak256(msg.sender)) ^ uint64(_gateKey) == uint64(0) - 1);
    _;
  }
```

uint64(0) - 1 = 2\*\*64 -1 = 18446744073709551615(1111111111111111111...1111(64))
^ -> ビットごとの XOR

uint64(\_gateKey)を使ってマスクするっぽい

uint64(keccak256(msg.sender)） -> (1111011010101010101110111...111)と仮定すると

XOR は

| msg | Key | result |
| :-: | :-: | :----: |
|  0  |  0  |  0(x)  |
|  1  |  0  |   1    |
|  0  |  1  |   1    |
|  1  |  1  |  0(x)  |

なので全て 1 にするようにするには
msg.sender が 0 のとき key は 1
msg.sender が 1 のとき key は 0

つまり key は msg.sender の真逆を作ればいい
なので
(msg.sender)XOR 0 = key

コードにするとこうなる

```

uint64 key = ~uint64(keccak256(msg.sender));
return bytes8(key);
```

# 15. Naught Coin

自由に転送できるようにするには
player を自分のアドレス以外のアドレスに変更すればいい...
けど別のアカウントに送って自分のアドレスは使用しないようにすれば自分のトークン量は 0 になる。

```js

  modifier lockTokens() {
    if (msg.sender == player) {
      require(now > timeLock);
      _;
    } else {
     _;
    }
  }
```

ERC20 の approve,transferFrom ワークフローを使用して他のアドレスに送ってしまおう

approve,transferFrom ワークフローは ICO のときに使われる、ERC20 の関数である。
approve でどのアカウントにどの量送信可能ににするかを設定し
transferFrom で許可された分だけトークンを送信可能にする。

この二つの関数は lockTokens されていないため
自分のアドレスのトークンを他のアドレスから送らせることが可能

1e+24 トークン分送信してクリア

# 16. Preservation

DelegateCall のストレージ格納方法についての知識が必要
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/382669/bd6201e3-bf77-4727-2b0d-dca75cd98885.png)

delegateCall した際に格納されるストレージは定義した変数に入れられるのではなく

<font color="red">ストレージのスロットに格納される。</font>

つまり、図の Contract B は変数 bar がスロット 0 にあるため`B.delegateCall(..setTo5)`を実行すると
Contract A のスロット 0、つまり変数 foo が書き換わってしまう。

このことを利用すると、
` address public timeZone1Library;`を書き換えることが可能

あとはストレージレイアウトの同じ、owner を書き換えるコントラクトをデプロイして実行させるように作成すればクリア

自分のアドレスの uint256
`'1356523368718057898125122042148055426621049139262'`

# 17. Locked

struct のアンチパターン

```js

contract Locked {

    bool public unlocked = false;  // registrar locked, no name updates

    struct NameRecord { // map hashes to addresses
        bytes32 name; //
        address mappedAddress;
    }

    mapping(address => NameRecord) public registeredNameRecord; // records who registered names
    mapping(bytes32 => address) public resolve; // resolves hashes to addresses

    function register(bytes32 _name, address _mappedAddress) public {
        // set up the new NameRecord
        NameRecord newRecord;
        newRecord.name = _name;
        newRecord.mappedAddress = _mappedAddress;

        resolve[_name] = _mappedAddress;
        registeredNameRecord[msg.sender] = newRecord;

        require(unlocked); // only allow registrations if contract is unlocked
    }
}
```

struct は格納されるデータ群の参照をするもの

<font color="red">デフォルトで Storage</font>

関数内で Struct を宣言すると Storage として宣言され現在のスロットの上書きをしてしまう

```js

    function register(address _name, address _mappedAddress) public {
        // set up the new NameRecord
        address storage A = address(1); //コンパイルエラー　関数内でStorageは宣言できない
        NameRecord newRecord; // Structとarrayはできちゃう
        newRecord.name = _name;
        newRecord.mappedAddress = _mappedAddress;
    }
```

問題では newRecord.name で unlock が上書きされる
1 スロットで true のみの格納は
`0x0000000000000000000000000000000000000000000000000000000000000001`
こうなる

# 18. Recovery

`selfdestruct(_to)`は自分のコントラクトを破壊し元のアドレスに変換する。

EtherScan でどこに送っていたのかを見る。

<img
width="1269"
alt="スクリーンショット 2020-08-02 16.47.40.png"
src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/382669/77d3102e-a193-67e2-b4db-cf43a66ab25d.png"

> </img>

0.5eth を持つコントラクトを selfdestruct すれば ok
selfdestruct を public にしてるのフツーにやばない？
誰からでも selfdestruct できるやんけ...

# 19. MagicNumber

opecode を理解する必要がある。

この方のブログが参考になる。
[Solidity Assembly 入門](https://y-nakajo.hatenablog.com/entry/2018/06/03/165658)

<strong> [Runtime Code] </strong>
今回は 0x42 を返すだけの opecode を考える。

まずは 0x42 を stack 領域にいれる(0x42 は 1bytes で表せるので PUSH1)
`PUSH1(0x42)`

次に memory 領域にいれる(0x80 からフリーメモリポインタ。0x80 以前は予約されている->Initialization Opcode)
`MSTORE(0x80,0x2a)`

それを memory 領域に格納したデータ(0x80 から 1 スロット 32bytes 分->0x20)を返す
`RETURN(0x80,0x20)`

つまり
`PUSH1 0x42 PUSH1 0x80 MSTORE PUSH1 0x20 PUSH1 0x80 RETURN`
この流れで実行される。
全 10opcode!
これをバイトコードに直す

[Ethereum Virtual Machine Opcodes](https://ethervm.io/)
上の対応表をみながら書いていく
`60 2a 60 80 52 60 20 60 80 f3`

<strong>[Initialization Opcode]</strong>
0x80 以前の opcode を考える Initialization Opcode とはコントラクトを作成するための
Opcode 主に Runtime Opcode を作成する

`CODECOPY`を使って Runtime Opcode をメモリにコピーする
`CODECOPY(t, f, s)`の引数は

- (t) 最初のメモリの宛先。
- (f) Runtime Opcode のバイトコード全体に対する位置
- (s) Runtime Opcode のコードのサイズ

s からスタックに入れていく 今回は 10bytes なので
`PUSH1 0x0a`

f は現在わからない。Initialize Opcode
`PUSH1 0x??`

t は 0x00 なので
`PUSH1 0x00`

`DATACOPY`

なので
`60 0a 60 ?? 60 00 39`

コピーしたら Runtime Opcode に戻るために`RETURN`をする
`RETURN(p,s)`は実行を終了して指定したメモリに戻る

- (p) 戻るメモリの相対位置。
- (s) datasize

`PUSH1 0x0a`
`PUSH1 0x00`
`RETURN`

なので
`60 0a 60 00 f3`
全部で 12bytes なので??は`0c`

よって
`0x600a600c600039600a6000f3602a60805260206080f3`
これを web3 でトランザクションを作成する

```js
var account = "0xeD9C9c93b75b8222934A4772A5A9eb55A8Cbf03E"; // my account
var bytescode = "0x600a600c600039600a6000f3602a60805260206080f3";
web3.eth.sendTransaction(
  { from: account, data: bytescode },
  function (err, res) {
    console.log(res);
  },
);
```

<img
width="1269"
alt="スクリーンショット 2020-08-03 0.17.57.png"
src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/382669/09904a7b-5794-e689-e074-a160aff8d11f.png"

> </img>
> しっかり作られていることを確認

これを Solver に登録してクリア

# 20. Alien Codex

馬鹿でかい要素を持つ array を作るため、データを低レベルで call する必要がある。

1.  関数のハッシュの作り方

`bytes4(keccak256(abi.encodePacked(func)));`

`make_contract(bytes32[])` -> `0x1d3d4c0b`

次に引数の要素のポインタを指定
今回は一要素しかないのでポインタを指定する 32bytes の次なので
`0x0000000000000000000000000000000000000000000000000000000000000020`

bytes32[].length >2\*\*200 　をクリアするためのバイト列を作る
2^200 = 16^50
bytes32[]のような動的な型は最初に型の要素数を指定する
`0x1000000000000000000000000000000000000000000000000000000000000000` -> 16^64 なのでクリア
要素数の次はなんでもありなので基本的には何もしなくても 0 が入っている

なので data は
`0x1d3d4c0b00000000000000000000000000000000000000000000000000000000000000201000000000000000000000000000000000000000000000000000000000000000`

トランザクションを作成する

```js
web3.eth.sendTransaction(
  { to: contract.address, data: rowdata, from: player, gas: 1000000 },
  function (error, result) {
    console.log(result);
  },
);
```

これで contact は true になる。

2.  スロットがオーバーフローするのを狙う
    web3.eth.getStorageAt でストレージをみてみると

```

0) 0x00000000000000000000000173048cec9010e92c298b016966bde1cc47299df5
1) 0x0000000000000000000000000000000000000000000000000000000000000000
2) 0x0000000000000000000000000000000000000000000000000000000000000000
3) 0x0000000000000000000000000000000000000000000000000000000000000000
```

|     slot     |            bytes             |
| :----------: | :--------------------------: |
|      0       |     bool + owner address     |
|      1       |         Array.length         |
|  keccak(1)   |           codex[1]           |
| keccak(1)+1  |           codex[2]           |
|              |                              |
|   2^256-1    |   codex[2^256-1-keccak(1)]   |
| 0(over flow) | codex[2^256-1-keccak(1)＋ 1] |

動的な型（array など）はメモリの衝突が起きないように keccak(1)を最初の動的な型のメモリ開始地点としている。
スロットは 2^256 個あるが溢れるとオーバーフローを起こし、0 スロットに戻ってくるため owner address を変更することができる。

`2^256-1-keccak(1)+1 = 35707666377435648211887908874984608119992236509074197713628505308453184860938`

トランザクションを作成して実行

```
// revise(index, value)
await contract.revise('35707666377435648211887908874984608119992236509074197713628505308453184860938','0x000000000000000000000001eD9C9c93b75b8222934A4772A5A9eb55A8Cbf03E',{from:player, gas:1000000})
```

<img
width="890"
alt="スクリーンショット 2020-08-05 0.20.51.png"
src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/382669/b0485d4c-8aae-7dbd-a134-2f477a504dc0.png"

> </img>

なんかどうやら意図的に Array Overflow させるのは対策されているのかな...？

他の記事みるとこれでうまくいってるぽいんでとりま保留

# 21. Denial

owner がコントラクトから引き出せなくなればクリア

`partner.call.value(amountToSend)();`
ここの部分が他のコントラクトに問い合わせているにも関わらず、revert 対策を行っていない
そこで意図的に revert させればいい
ここは正直どんな方法で revert させてもいいので

re-entrancy を使ってガスを 0 にして revert させた。

# 22. Shop

初期値の price よりやすくすればクリア

```js
if (_buyer.price.gas(3000)() >= price && !isSold) {
  isSold = true;
  price = _buyer.price.gas(3000)();
}
```

`_buyer.price`を二度呼んでいるが最初の呼び出しより少ない値を返すようにすれば
`isSold`は true
かつ
`price`が 100 よりやすくできる。

コントラクトを作成する
\_buyer.price を呼び出すがガスは(3000)に制限されている。
ストレージを使用する price の呼び出しは最低でも 8000 ガスが必要なため、ストレージを使わない関数を書く

```js

    function price() public view override returns (uint256){
        return Shop(ShopAddress).isSold() == true ? 0:100;
    }
```

こうすることでクリアできる....はずなんだが、
https://github.com/OpenZeppelin/ethernaut/issues/156

どうやらイスタンブールアップデートで SLOAD のガスが 200 から 800 に変更されたせいで
ガス制限 3000 はクリアしない模様

こればかりはクリアできないね

# まとめ

だいぶ初学者からすると骨のある問題ばかりだった
storage のメモリ設計や fallback など代表的な脆弱性の他にも
もうすでに solidity のコンパイラがエラーをはいてくれるものもあった。
なるべく新しいバージョンを使うのがセキュリティ面でもいいと思った。
