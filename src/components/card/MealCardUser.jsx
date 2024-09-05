
import EditButton from "../buttons/EditButton";



function MealCardUser({ meal, currentUser, onDelete }) {
    const userId = localStorage.getItem('userId'); 
    const isAuthenticated = !!currentUser;
    const isCreator = currentUser && meal.user && meal.user.id.toString() === userId;

    return (
        <div className="bg-yellow-100 w-[18.75rem] h-[23.313rem] rounded-[1.25rem] shadow-lg overflow-hidden relative">
            <img src={meal.urlImage} alt={meal.title} className="w-full h-[18.75rem] rounded-[1.25rem] object-cover" />
            {isAuthenticated && (
                <div className="absolute top-2 right-2">
                   
                </div>
            )}
            <div className="p-4 flex justify-between">
                <div className="flex flex-col justify-between flex-grow">
                    <div>
                        <h2 className="text-lg font-bold text-blue-600">{meal.title}</h2>
                        <p className="text-sm text-blue-600">{meal.location}</p>
                    </div>
                </div>
                {isCreator && ( 
                    <div className="w-[5.063rem] h-[2.50rem] flex justify-between">
                        <EditButton mealId={meal.id}/>
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default MealCardUser;
