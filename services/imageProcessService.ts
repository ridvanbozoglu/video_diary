export interface Post {
    title: string;
    body: string;
    userId: number;
  }
  
  export const createPost = async ({ title, body, userId }: { title: string; body: string; userId: number }): Promise<Post> => {
    console.log("Post oluşturuluyor...");
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const json: Post = await response.json();
    return json;
  };
  

  
  
