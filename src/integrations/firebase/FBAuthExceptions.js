export default async (error) => {
    if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      if (error.code === 'auth/user-not-found') {
        console.log('user not found');
      }

      console.error(error);
}