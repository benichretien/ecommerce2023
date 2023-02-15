import Jumbotron from "../../components/cards/Jumbotron";
import {useAuth} from "../../context/auth";


 export default function Home() {
  const [auth, setAuth] = useAuth();
    return (
      <div>
        <Jumbotron title="ANIMAGO!"/>
        <h1>this is Home page</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    );
  }
  