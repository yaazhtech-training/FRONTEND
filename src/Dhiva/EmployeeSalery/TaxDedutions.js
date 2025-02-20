//Input : 
// employee earns ₹700 per day and works for 15 to 22 days/month.
// If their monthly salary exceeds ₹15,000, 
// tax of 10% is deducted. 

//Output :
// Calculate the take-home salary after tax.

import React from 'react'

const TaxDedutions = () => {
    const Employees = [
        {name:"Dhiva" , daysWorked : 15 , salary : 700 },
        {name:"Praveen" , daysWorked : 25 , salary : 700 },
        {name:"Ajith" , daysWorked : 20 , salary : 700 },
        {name:"Virat" , daysWorked : 22 , salary : 700},
        {name:"Ronaldo" , daysWorked : 17 , salary : 700 }
    ]
    const calculateSalary = (daysWorked , salary) => {
          const totalSalary = daysWorked * salary;
          const tax= (10 /100)*totalSalary;
          const TaxDedutions = (totalSalary > 15000 ? tax : 0);
          const takeHomeSalary = totalSalary - TaxDedutions;
        return{totalSalary , TaxDedutions , takeHomeSalary, tax}
    }
  return (
    <div>
      <h1>Tax Deduction Calculation</h1>
      <table>
        <thead>
        <tr>
            <th>Employees</th>
            <th>Salary</th>
            <th>workingDays</th>
            <th>totalSalary</th>
            <th>tax</th>
            <th>takeHomeSalary</th>
            
        </tr>
        </thead>
        {Employees.map((emp,index)=>{
            const {totalSalary , TaxDedutions , takeHomeSalary, tax}= calculateSalary(emp.daysWorked ,emp.salary)
            return(
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>{emp.daysWorked}</td>
                <td>{totalSalary}</td>
                <td>{TaxDedutions}</td>
                <td>{takeHomeSalary}</td>
              </tr>
            )
          })}
        </table>
    </div>
  )
}

export default TaxDedutions
