import HeaderUser from "../components/header/HeaderUser";
import ListOfMeal from "../components/forms/list/ListOfMeal";

function MealPage() {
  return (
    <>
      <div className="w-full h-auto">
        <HeaderUser className="mb-6" />
        <main className="w-full h-auto flex flex-col items-center">
          <div className="mt-7">
            <ListOfMeal />
          </div>
        </main>
      </div>
    </>
  );
}
export default MealPage;
