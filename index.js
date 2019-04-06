$(() => {
    $('#tipButton').on('click', async () => {        
        try {
            // Web3インスタンスの作成
            // MetaMaskを導入することでwindow.web3が定義されている。
            // Web3ライブラリはブラウザとイーサリアムブロックチェーンを繋ぐ役割を果たす。
            // 下のようにインスタンスを作成することでMetaMaskのアカウントに対し操作が行えるようになる。
            const web3 = new Web3(window.web3.currentProvider);
            // アカウントの取得
            // web3.eth.getAccountsでアカウントの配列が取得できる。
            // accountには、アカウントのアドレスが格納されている。
            const accounts = await web3.eth.getAccounts();            
            const account = accounts[0];            
            // トランザクションを送る
            // web3.eth.sendTransactionでトランザクションを送れれる。
            const res = await web3.eth.sendTransaction(
                {
                    from: account,
                    to: '0xf462DC4c334aE14De560229ff0112d1087b3467a',
                    value: 10 ** 17
                }
            )
        } catch (e) {
            alert(`送金に失敗しました ${e.message}`);
        }
    })
});