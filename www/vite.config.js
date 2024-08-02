import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', //開発ディレクトリ設定
  base: './',//相対パスにするための./とする
  build: {
    outDir: '../html', //出力場所の指定
  },
  server: { //Docker環境（仮想環境）なので以下の設定が必要
    port: 3000,//Dockerの設定でPortは3000にしています
    host: true,//Dockerなどの仮想から外に出すためには　host:trueとする
    strictPort: true,//ポートがすでに使用されている場合に、次に使用可能なポートを自動的に試さない設定にしておきます
    watch: {
      usePolling: true//Dockerなどの仮想の場合この設定をしておくと吉
    }
  }
});