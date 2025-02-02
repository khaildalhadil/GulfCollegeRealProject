import { useContext, createContext, useReducer } from "react";

const myContext = createContext();

const MyProviderContext = ({children}) => {

  const tokenFromLocal = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const imgUrl = localStorage.getItem('imgUrl');

  const init = {
    userInfo: {userName, imgUrl},
    token: tokenFromLocal,
    postOpen: false,
    posts: [],
   }
  
  const [{
      userInfo, 
      posts,
      token, 
      postOpen,
    }, dispatch] = useReducer(reducer, init);

  function reducer(state, action) {
    switch(action.type) {
      case 'add/user':
        localStorage.setItem('token', action.userInfo.token);
        localStorage.setItem('userName', action.userInfo.data.userName);
        localStorage.setItem('imgUrl', action.userInfo.data.imgUrl);
        localStorage.setItem('id', action.userInfo.data._id);
        return {...state, userInfo: action.userInfo.data, token: action.userInfo.token};

      case 'logout/user':
        localStorage.setItem('token', '');
        localStorage.setItem('userName', '');
        localStorage.setItem('imgUrl', '');
        return {...state, userInfo: {userName: '', imgUrl: '' }, token: ''};

      case 'get/post':
        return {...state, posts: action.allPost}

      // case 'add/onePost':
      //   // console.log(action.post)
      //   return {...state, posts: [...posts, action.post]}

      case 'open/post':
        return {...state, postOpen: true}

      case 'close/post':
        return {...state, postOpen: false}

      case 'remove/user': 
        return {...state, userInfo: []}
    }

  }

  return (
    <myContext.Provider value={ {dispatch, userInfo, token, postOpen, posts} }>
      {children}
    </myContext.Provider>
  )

}

function useMyContex() {
  const data = useContext(myContext);
  return data;
}

export {useMyContex, MyProviderContext}