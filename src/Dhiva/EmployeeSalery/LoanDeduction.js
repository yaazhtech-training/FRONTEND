//Employee Salary with Loan Deduction
//Input : Each employee gets ₹700 per day and works for 15 to 22 days/month.
//Some employees have loans, and ₹2000 per month is deducted.
//Additional Allowance: ₹1500 for employees with more than 20 days of work.

//Output : take-home salary after loan deduction.

import React from 'react'

const LoanDeduction = () => {
    const Employees = [
        {name:"Dhiva" , daysWorked : 15 , salary : 700 , hasloan : true},
        {name:"Praveen" , daysWorked : 18 , salary : 700 ,hasloan : false},
        {name:"Ajith" , daysWorked : 20 , salary : 700 , hasloan : true},
        {name:"Virat" , daysWorked : 22 , salary : 700,hasloan : false},
        {name:"Ronaldo" , daysWorked : 25 , salary : 700 , hasloan : true}
    ]

   
    const AdditionalSalary = 1500;
    const loanDeduction = 2000;

    const calculateSalary = (daysWorked , salary , hasloan) => {
        const totalSalary = daysWorked * salary;
        const pf = totalSalary * (1.5 / 100)
        const tdf = totalSalary * (1 /100)
        const takeHomeSalary = totalSalary - pf - tdf - (hasloan ? loanDeduction : 0);
        const AdditionalPayment = daysWorked >= 20 ? AdditionalSalary : 0 ;
        
        return{totalSalary , pf , tdf , takeHomeSalary , AdditionalPayment , hasloan};
    }
  return (
    <div>
      <h1>Employee Salary with Loan Deduction</h1>
      <table>
        <thead>
        <tr>
            <th>Employees</th>
            <th>Salary</th>
            <th>workingDays</th>
            <th>totalSalary</th>
            <th>PfDeduction</th>
            <th>TdfDeduction</th>
            <th>AdditionalSalary</th>
            <th>Loan</th>
            <th>takeHomeSalary</th>
        </tr>
        </thead>
        <tbody>
            {Employees.map((emp , index) => {
               const {totalSalary , pf , tdf , takeHomeSalary , AdditionalPayment , hasloan} = calculateSalary(emp.daysWorked , emp.salary , emp.hasloan)
              return(
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.daysWorked}</td>
                  <td>{totalSalary}</td>
                  <td>{pf}</td>
                  <td>{tdf}</td>
                  <td>{AdditionalPayment}</td>
                  <td>{hasloan ? loanDeduction : 0}</td>
                  <td>{takeHomeSalary}</td>
                </tr>
              )
            })}
           
        </tbody>
      </table>
    </div>
  )
}

export default LoanDeduction
