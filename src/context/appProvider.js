import appContext from './appContext';

const appProvider = (children) => {
  return(
    <appContext.Provider value={}>
      { children }
    </appContext.Provider>
  )
}

export default appProvider;
