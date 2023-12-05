export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Info: undefined;
      CreateRefeicao: undefined;
      FeedBackBom: undefined
      FeedBackRuim: undefined
      InfoRefeicao: {
        item: {
          desc: string,
          dieta: boolean,
          hora: string,
          nome: string
          convertData: string
        }
      }
      EditarRefeicao: {
        item: {
          desc: string,
          dieta: boolean,
          hora: string,
          nome: string
          convertData: string
        }
      }
    }
  }
}