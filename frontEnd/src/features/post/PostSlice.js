
const initialState = {
  postOpen: false,
  posts: [],
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'post/set':
      return {...state, posts: action.payload}
    
    case 'post/open':
      return {...state, postOpen: true}

    case 'post/close':
      return {...state, postOpen: false}
  }
} 

export function getPost(post) {
  return ({type: 'post/set', payload: post})
}

export function addPost(newPost) {
  
  return ({type: 'post/set', payload: post})
}

export function openToCreatePost() {
  return ({type: 'post/open'})
}

export function openToCreatePost() {
  return ({type: 'post/close'})
}