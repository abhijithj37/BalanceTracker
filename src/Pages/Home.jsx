 import Accounts from "../Components/Accounts";
import RepaymentModel from "../Components/RepaymentModel";

function Home() {
 
  return (
    <>
      <main className="flex p-20 px-25">
        <Accounts />
        <RepaymentModel />
      </main>
    </>
  );
}

export default Home;
