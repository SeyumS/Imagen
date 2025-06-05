const populateUsers= async()=>{
try{
  const url = 'https://api.unsplash.com/search/users/?page=7&query=developer&client_id=tZFo_JxgKuUJwBCxomOvjHJhCwz_biCYIQxwcNhBxJ4'
  const response = await fetch(url)
 
  const data = await response.json()
  const users = data.results;
  console.log(users)
  console.log('___________________')
  for(const element of users){
    if(element === undefined|| element.username == null){
      continue
    }
    const url = 'http://localhost:3000/imagen/api/v1/users/'
  
    const userData = {
      name: element.username,
      photo: element.profile_image.small,
      description: element.bio,
      password: "test1234",
      passwordConfirm: "test1234",
      email: `${element.username}@gmail.com`,
      phoneNumber: '54678 3645305'
    }
    const res = await fetch(url, {method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  }
  }catch(err){
    console.log(err.message)
  }
}
  