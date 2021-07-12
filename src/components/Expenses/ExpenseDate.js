import './ExpenseDate.css';

function ExpenseDate(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    
    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}.</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}.</div>
        </div>
    );
}

export default ExpenseDate;

//JavaScript code below
//Use printErr(...) to debug your solution.
//let numbers = [1, -28, 88, 200, 7];
//
//function findLargest(numbers) {
//    return Math.max(...numbers);
//}
//
//console.log(findLargest(numbers));