***********************************************************
イテラブルオブジェクト
***********************************************************


そもそもオブジェクトとは
###########################################################

本章の本題であるイテラブルオブジェクトを学ぶ前に、そもそもオブジェクトというものが何なのかを説明しましょう。

| オブジェクト (Object) を直訳すると「物体」です。
| プログラミング言語で言うところのオブジェクトとはつまり、物体のような性質を持ったデータのことなのです。
| そして、Python のデータは全てオブジェクトです。

| オブジェクトは画面に表示されるデータだけでなく、内部に様々な属性 (アトリビュート) を持っています。
| アトリビュートには **情報や状態等を表すデータ (プロパティ)** と、 **データに対する操作や処理 (メソッド)** があります。

例えば、ここに私の名刺があります。

.. image:: _static/image007.png

この名刺のプロパティとメソッドはこんな感じになるでしょう。

(プロパティ)
    | タテ: 91mm
    | ヨコ: 55mm
    | 社名: 株式会社ジョブクラウン
    | 氏名: 津山太郎

(メソッド)
    交換する: 相手に自分の情報を伝えると共に、相手が名刺を持っている場合相手の名刺が手に入る

これを card というデータ型のオブジェクト tsuyama_card と定義するとこんな感じになります。

.. image:: _static/image008.png

.. line-block::
    :class: mb0

    ここで、Python の str 型のデータを見てみましょう。

.. code-block:: python

    text = "python"

| この str 型の変数 text は print 関数に渡すと Python という文字が表示されます。
| ですが、この変数 text には Python という文字以外にも様々な情報を持っています。
| (逆を返すと print 関数は「受け取ったデータの中にある文字データのみを画面に表示する」という機能を持った関数なのです。)

変数 text を図で表すと次のようになります。

.. image:: _static/image009.png

| str 型の文字データは __str__ というメソッドで取得できます。
| 文字数は __len__ というメソッドで取得できます。

.. line-block::
    :class: mb0

    アトリビュートはオブジェクト.アトリビュートという風に . (ドット) でつなぐと取得できます。

.. code-block:: python

    print(text.__str__())
    print(text.__len__())


メソッド
***********************************************************

| メソッドとはそのオブジェクトが持っている機能 (関数) のことです。
| 例として str 型のメソッドを一部紹介します。対話モードを使って実際に試してみましょう。

.. line-block::
    :class: mb0

    str.replace(old, new[, count])
    文字列内にある文字列 old 全てを new に置換して返します。
    オプション引数 count が与えられている場合、先頭から count 個の old だけを置換します。

.. code-block:: python

    text = "python"
    text = text.replace("p","j")
    text = text.replace("yth","obcr").replace("on","own")
    print(text)

.. line-block::
    :class: mb0

    str.upper()
    大小文字の区別のある文字が全て大文字に変換された文字列を返します。

.. code-block:: python

    text = text.upper()
    print(text)

.. line-block::
    :class: mb0

    ちなみに・・・
    オブジェクトが持っているアトリビュート名を知りたいときは dir 関数を使用します。

.. code-block:: python

    print(dir(text))



イテラブルオブジェクトとは
###########################################################

| イテラブルオブジェクトとは、 **複数の要素を含み、ひとつずつ要素を取り出すことのできるオブジェクト** です。
| シーケンス型と呼ばれることもあります。

Pythonでよく扱うイテラブルオブジェクトに分類されるデータ型は次のとおりです。(他にもあります)

* 文字列 (str)
* リスト (list)
* タプル (tuple)
* セット (set)
* ディクショナリ (dict)

.. line-block::
    :class: mb0

    例えば、list 型のデータは次のような感じで使用できます。

.. code-block:: python

    some_list = ["Python", "勉強会", "Jobcrown"] # 3 つのデータを格納している状態


様々なデータをひとつのオブジェクトに格納して処理できるというのがイテラブルオブジェクトの強みの一つです。


スライス
###########################################################

.. line-block::
    :class: mb0

    イテラブルオブジェクトのデータから特定の位置の要素を取り出すためにはスライスというものを使用します。 (スライスに対応していないものもあります。) 
    スライスの使い方はデータの後ろに [ ] をつけて、取り出したい要素番号を入れるだけです。
    ここでは str 型の例で見ていきます。対話モードで実際に試してみましょう。

.. code-block:: python

    text = "python"

| str 型のデータを定義すると、各文字と要素番号の対応は下図のようになります。
| **要素の先頭は 0 です。**
 
.. image:: _static/image010.png


.. line-block::
    :class: mb0

    先頭の要素を取り出す場合は下記のようにします。

.. code-block:: python

    c = text[0]
    print(c)


下図のように 0 番目の要素を指し示しているので "p" が取得できます。
 
.. image:: _static/image011.png


.. line-block::
    :class: mb0

    同様に、3 番目の要素を指定すると "h" が取得できます。

.. code-block:: python

    c = text[3]
    print(c)

.. image:: _static/image012.png



.. line-block::
    :class: mb0

    末尾の要素は -1 で表現できます。

.. code-block:: python

    c = text[-1]
    print(c)

.. image:: _static/image013.png 


.. line-block::
    :class: mb0

    末尾以外の要素も - で表現できます。

.. code-block:: python

    c = text[-3]
    print(c)

.. image:: _static/image014.png



.. line-block::
    :class: mb0

    n 番目から m 番目までの要素を取り出す場合 [n : m + 1] とします。

.. code-block:: python

    new_text = text[1:4]
    print(new_text)

ここで取得できる文字列は、下図のように 4 番目の要素を含まない "yth" となります。

.. image:: _static/image015.png



.. line-block::
    :class: mb0

    n 番目から最後までの要素を取り出す場合 [n :] とします。

.. code-block:: python

    new_text = text[3:]
    print(new_text)

.. image:: _static/image016.png



.. line-block::
    :class: mb0

    先頭から m 番目までの要素を取り出す場合 [: m + 1] とします。

.. code-block:: python

    new_text = text[:5]
    print(new_text)

.. image:: _static/image017.png



.. line-block::
    :class: mb0

    n 番目から m 番目までの要素を l 個おきに取り出す場合 [n : m + 1 : l + 1] とします。

.. code-block:: python

    new_text = text[0:5:2]
    print(new_text)

.. image:: _static/image018.png



.. line-block::
    :class: mb0

    当然のことですが、スライスに要素数より大きい数値を指定するとエラーになります。

.. code-block:: python

    c = text[10]
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    IndexError: string index out of range

整数の数値でないものを指定してもエラーとなります。


リスト (list)
###########################################################

複数のデータを格納できるデータ型です。

.. line-block::
    :class: mb0

    リストは [ ] 内に項目をカンマ区切りで列挙して定義します。
    対話モードで実際に試してみましょう。

.. code-block:: python

    list1 = ["python", "hiyoko", "jobcrown"]

.. line-block::
    :class: mb0

    スライスを使用して要素を取得できます。

.. code-block:: python

    item = list1[2]
    print(item)

前節で解説したように、list1[2] とすると list1 の 2 番目の要素が取得できるのがわかるでしょうか。

項目の追加
***********************************************************

.. line-block::
    :class: mb0

    リストは項目の追加ができます。追加には **append メソッド** を使用します。

.. code-block:: python

    list1.append("data")
    print(list1)

項目の削除
***********************************************************

.. line-block::
    :class: mb0

    項目の削除には末尾または n 番目の要素を削除する方法と、データを指定して削除する方法があります。
    末尾または n 番目の要素を削除するには **pop メソッド** を使用します。
    pop メソッドは削除した項目をデータとして取得できます。
    (もっとそれっぽい表現をすると、pop メソッドには **戻り値** があります)

.. code-block:: python

    item1 = list1.pop() # 末尾の要素を削除して返す
    item2 = list1.pop(1) # 1 番目の要素を削除して返す
    print(item1, item2)
    print(list1)

.. line-block::
    :class: mb0

    データを指定して削除するには **remove メソッド** を使用します。
    remove メソッドは削除した項目をデータとして取得できません。
    (remove メソッドには戻り値がありません)

.. code-block:: python

    list1.remove("python") # 項目 "python" を削除
    print(list1)

.. line-block::
    :class: mb0

    データをすべて削除するには **clear メソッド** を使用します。

.. code-block:: python

    list1.clear() # すべての項目を削除
    print(list1)

| pop メソッドは、リストに項目がないときや要素数よりも大きい数値を指定するとエラーとなります。
| remove メソッドは、リストに対象のデータが存在しない場合エラーとなります。



タプル (tuple)
###########################################################

リストと同様に複数のデータを格納できるデータ型です。

.. line-block::
    :class: mb0

    タプルは ( ) 内に項目をカンマ区切りで列挙して定義します。
    対話モードで実際に試してみましょう。

.. code-block:: python

    tuple1 = ("python", "hiyoko", "jobcrown")

| リストと違い、一度定義すると要素の追加・削除ができません。
| 要素の追加・削除ができない性質を **イミュータブル (immutable)** といい、後述のディクショナリのキーに指定できます。

.. line-block::
    :class: mb0

    また、( ) を使用しないでカンマ区切りで列挙すると自動的にタプルになります。

.. code-block:: python

    tuple2 = 123, 456, 789
    print(type(tuple2)) # <class 'tuple'>



セット (set)
###########################################################

リストと同様に複数のデータを定義できるデータ型です。

.. line-block::
    :class: mb0

    セットは { } 内に項目をカンマ区切りで列挙して定義します。
    対話モードで実際に試してみましょう。

.. code-block:: python

    set1 = {"python", "hiyoko", "jobcrown"}
    print(set1)

.. line-block::
    :class: mb0

    リストと違い、重複したデータは追加できません。(自動的に削除されます)
    また、スライスを使用して要素を取得することができません。
    print 関数で set1 の中身を見て気づいたかもしれませんが、項目の順番が定義した時と変わっています。
    セットは項目の順番を内部的なロジックで並べ替えてしまう性質があるのです。
    これがスライスを使用できない理由です。(セットには順番の概念がないともいえます)

項目の追加
***********************************************************

.. line-block::
    :class: mb0

    セットは項目の追加ができます。追加には **add メソッド** を使用します。

.. code-block:: python

    set1.add("data")
    set1.add("python") # 重複したデータは無視されます
    print(set1)

項目の削除
***********************************************************

セットの項目の削除はリストと同様に pop、remove、clear があり、それに合わせて discard というメソッドがあります。
ただし、セットの性質上 pop メソッドでは要素番号の指定はできませんし、順番の概念がない = 末尾という概念もないため、どの項目が削除されるかわかりませんので使用は推奨されていません。
discard は remove と同様のメソッドですが、対象のデータが存在しない場合でもエラーになりません。

セットは主に **集合演算** に使用したり、リストやタプルから **重複項目を削除したいとき** に一時的にセットに変換するというような使い方をします。

集合演算の例
***********************************************************

.. line-block::
    :class: mb0

    まずはセットを下記のように定義します。

.. code-block:: python

    set1 = {"python", "hiyoko", "jobcrown"}
    set2 = {"jobcrown", "ジョブクラウン"}

.. line-block::
    :class: mb0

    和集合: set1、set2 いずれかの集合に少なくとも一方に含まれる集合

.. code-block:: python

    set3 = set1 | set2
    print(set3)

.. image:: _static/image_set1.png

.. line-block::
    :class: mb0

    積集合: set1、set2 の集合に共通に含まれる集合

.. code-block:: python

    set4 = set1 & set2
    print(set4)

.. image:: _static/image_set2.png

.. line-block::
    :class: mb0

    差集合: set1 から set2 に含まれる要素を差し引いた集合

.. code-block:: python

    set5 = set1 - set2
    print(set5)

.. image:: _static/image_set3.png

.. line-block::
    :class: mb0

    対象差: set1 のみに属する集合と、set2 のみに属する集合からなる集合

.. code-block:: python

    set6 = set1 ^ set2
    print(set6)

.. image:: _static/image_set4.png


リストから重複項目を削除する例
***********************************************************

.. line-block::
    :class: mb0

    リストをセットに変換するには **set 関数** を使用します。
    また、セットをリストに変換するには **list 関数** を使用します。


.. code-block:: python

    list1 = ["python", "jobcrown", "python", "python"]
    list2 = list(set(list1)) # list1 をセットに変換して、さらにリストに変換
    print(list2)

| 上記の例では、list1 が一旦セットに変換される際に重複項目が削除されます。その後に再びリストに変換されます。
| ただし、これにはひとつ注意点があります。
| セットの性質上、項目の順番が入れ替わる可能性があるので、項目の順番を維持する必要がある場合は他の方法を検討しなければなりません。




ディクショナリ(dict)
###########################################################

キー (key) に対する値 (value) の組合せのデータを複数格納できるデータ型です。

.. line-block::
    :class: mb0

    { } 内にキーと値を : (コロン) で区切った組合せをカンマ区切りで列挙して定義します。
    対話モードで実際に試してみましょう。

.. code-block:: python

    dict1 = {"python" : "パイソン", "hiyoko" : "ひよこ", "jobcrown": "ジョブクラウン"}

.. line-block::
    :class: mb0

    ディクショナリは後ろに [ ] を付けてキーを渡すと対応する値が取得できます。

.. code-block:: python

    print(dict1["jobcrown"]) # ジョブクラウン

.. line-block::
    :class: mb0

    項目の追加ディクショナリの後ろに [ ] を付けてキーと値を指定します。
    重複したキーが定義された場合、後から定義した値で上書きされます。

.. code-block:: python

    dict1["data"] = "データ"
    dict1["jobcrown"] = "株式会社ジョブクラウン"
    print(dict1)

.. line-block::
    :class: mb0

    キーにはタプルが使用できます。 (リストやセットは使用できません) 

.. code-block:: python

    dict1[(1,1)] = "データ1"
    dict1[(1,2)] = "データ2" 
    print(dict1)


アンパック代入
###########################################################

.. line-block::
    :class: mb0

    イテラブルオブジェクトの各要素を別々の変数に代入したい場合、アンパック代入という方法を使用します。

.. code-block:: python

    data = [123, "Python", (1,2,3)]

    a, b, c = data

    print(a)
    print(b)
    print(c)

.. line-block::
    :class: mb0

    要素数と、変数の数が一致していないとエラーになります。

.. code-block:: python

    data = [123, "Python", (1,2,3)]

    a, b = data

.. line-block::
    :class: mb0

    変数の前に * を付けると、list として代入されます。
    list にできる変数は一つだけです。

.. code-block:: python

    data = [123, "Python", (1,2,3)]

    a, *b = data

    print(a)
    print(b)

.. line-block::
    :class: mb0

    この場合、要素数が変数の数より多くてもエラーとはなりません。


for文をもう少し深く理解する
###########################################################

.. line-block::
    :class: mb0

    python の for 文はイテラブルオブジェクトの各要素に対して処理を行なう構文です。
    他の言語で言うところの **foreach** と同等です。

.. code-block:: python

    for カウンタ変数 in イテラブルオブジェクト:
        処理

for 文でよく使用される range 関数は range オブジェクトというイテラブルオブジェクトを作成する関数なのです。

.. line-block::
    :class: mb0

    下記のようにすると変数 i には 0 から 9 まで順番に格納され、繰り返し処理を行っていきます。

.. code-block:: python

    for i in range(10):
        print(i)


.. line-block::
    :class: mb0

    つまり、下記のようにしても同等の処理を行うことができます。

.. code-block:: python

    list1 = [0,1,2,3,4,5,6,7,8,9]
    for i in list1:
        print(i)


.. line-block::
    :class: mb0

    str 型の変数もイテラブルオブジェクトなので for 文に使用できます。

.. code-block:: python

    text = "jobcrown"
    for i in text:
        print(i)


.. line-block::
    :class: mb0

    スライスを使うこともできます。

.. code-block:: python

    for i in text[1::2]:
        print(i)


.. line-block::
    :class: mb0

    イテラブルオブジェクトにディクショナリを指定すると、キーを取得できます。

.. code-block:: python

    dict1 = {"python" : "パイソン", "hiyoko" : "ひよこ", "jobcrown": "ジョブクラウン"}
    for i in dict1:
        print(i)


.. line-block::
    :class: mb0

    ディクショナリの値を取得したい場合は **values メソッド** を使用します。

.. code-block:: python

    for i in dict1.values():
        print(i)


.. line-block::
    :class: mb0

    ディクショナリのキーと値の組合せを取得したい場合は **items メソッド** を使用します。

.. code-block:: python

    for i in dict1.items():
        print(i)



演習問題
###########################################################

| 演習用ディレクトリに lesson2 というディレクトリを作成し、
| 各問題ごとに演習用のファイルを作成して、プログラムを作成しましょう。

演習1.
***********************************************************

.. line-block::
    :class: mb0

    ファイル名: practice1.py
    1 から 100 までの間にあるすべての整数を含んだ list 型の変数 num_list を作成しよう。


演習2.
***********************************************************

.. line-block::
    :class: mb0

    ファイル名: practice2.py
    1 から 100 までの間にあるすべての偶数を含んだ list 型の変数 even_list を作成しよう。


演習3.
***********************************************************

.. line-block::
    :class: mb0

    ファイル名: practice3.py
    1 から 100 までの間にあるすべての奇数を含んだ list 型の変数 odd_list を range 関数を使わずに作成しよう。


演習4.
***********************************************************

.. line-block::
    :class: mb0

    ファイル名: practice4.py
    1 から 100 までの間にあるすべての 3 の倍数と 3 の付く整数を含む list 型の変数 san_list を作成しよう。


演習5.
***********************************************************

.. line-block::
    :class: mb0

    ファイル名: practice6.py
    下記のリスト型の変数 mountains を elevation が小さい順に並べ替えるプログラムを作ってみよう。

.. code-block:: python

    mountains = [
        {"name": "悪沢岳", "elevation": 3141},
        {"name": "奥穂高岳", "elevation": 3190},
        {"name": "赤石岳", "elevation": 3120.53},
        {"name": "富士山", "elevation": 3776},
        {"name": "涸沢岳", "elevation": 3110},
        {"name": "北穂高岳", "elevation": 3106},
        {"name": "間ノ岳", "elevation": 3190},
        {"name": "大喰岳", "elevation": 3101},
        {"name": "槍ヶ岳", "elevation": 3180},
        {"name": "北岳", "elevation": 3193.2},
    ]

.. line-block::
    :class: mb0

    (ヒント)
        list をソートする例 (バブルソート)

.. code-block:: python

    nums = [6,2,3,-5,10,4]

    for i in range(len(nums)):
        for j in range(0, len(nums)-i-1):
            if nums[j] > nums[j+1]:
                tmp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = tmp

    print(nums)


演習6.
***********************************************************

.. line-block::
    :class: mb0

    ファイル名: practice5.py
    下記のリスト型の変数 name_list は、name、company を含むディクショナリが格納されています。
    また、message_list は、company_name、message を含むディクショナリが格納されています。


.. code-block:: python

    name_list = [
        {"name" : "Taro Tsuyama", "company" : "jobcrown"},
        {"name" : "ひよこ", "company" : "株式会社 ひよこ"},
        {"name" : "hiyoko", "company" : "ひよこカンパニー"},
        {"name" : "Job Crown", "company" : "jobcrown"},
        {"name" : "hiyoko", "company" : None},
        {"name" : "Python", "company" : "Pythonソフトウェア財団"},
    ]

    message_list = [
        {"company_name" : "jobcrown" , "message" : "こんにちは"},
        {"company_name" : "株式会社 ひよこ" , "message" : "ぴよぴよ"},
        {"company_name" : None , "message" : "いらっしゃいませ"},
    ]

.. line-block::
    :class: mb0

    これらのデータをもとに下記の実行例を表示できるプログラムを作ってみよう。

    (実行例)

.. code-block::

    こんにちは Taro Tsuyama さん
    ぴよぴよ ひよこ さん
    いらっしゃいませ hiyoko さん
    こんにちは Job Crown さん
    いらっしゃいませ ななし さん
    いらっしゃいませ Python さん




おまけ
###########################################################

.. line-block::
    :class: mb0

    Python には **内包表記** というイテラブルオブジェクトからリストやディクショナリ等を作れる便利な機能があります。
    少し理解しづらい書き方ですが、Python3 エンジニア認定基礎試験にも出題される内容なので覚えておいてもいいと思います。

.. line-block::
    :class: mb0

    リスト内包表記の基本形は下記のように記述します。

.. code-block:: python

    [項目 for 変数 in イテラブルオブジェクト]

.. line-block::
    :class: mb0

    (例) range 関数から 3 桁でゼロパディングした文字列のリストを作る

.. code-block:: python

    arr1 = [str(num).zfill(3) for num in range(10)]
    print(arr1)


.. line-block::
    :class: mb0

    条件式も使えます。

.. code-block:: python

        [項目 for 変数 in イテラブルオブジェクト if 条件式]

.. line-block::
    :class: mb0

    (例) 数値や文字列等が混在するリストから、空白でない文字列のみを取り出したリストを作る

.. code-block:: python

    arr2 = [1, ["list","list"], "", "python", "", False, "jobcrown"]
    arr3 = [item for item in arr2 if item and type(item)==str]
    print(arr2)
    print(arr3)


.. line-block::
    :class: mb0

    こんなこともできます。 (特に意味はありません)
    下記をファイルにコピペしてどんな動きになるか確認してみましょう。

.. code-block:: python
    :caption: list_comprehensions.py

    import time
    ord_list = [26666, 24335, 20250, 31038, 12472, 12519, 12502, 12463, 12521, 12454, 12531]
    chr_list = [chr(num) for num in ord_list] # リスト内法表記

    for data in chr_list:
        print(data, end="", flush=True)
        time.sleep(0.3)

    print("")
