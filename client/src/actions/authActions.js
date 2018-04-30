export function login (data) {
  return (dispatch) => {
    return fetch('/api/login', 
      { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) })
      .then(res => res.json())
      .catch(reason => console.error(reason))
  }
}
