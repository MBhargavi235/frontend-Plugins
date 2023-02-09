import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './Configuration'
Amplify.configure(awsExports);
export default function App() {
  return (
   <Authenticator>
      {({ signOut, user }) => {
        console.log(user,"user")
          return(
            <main> 
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
       )}}
    </Authenticator>
  );
}
