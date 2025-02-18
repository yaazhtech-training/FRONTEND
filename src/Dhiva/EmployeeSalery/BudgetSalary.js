
//input
//The company has a budget of ₹5,00,000 per month and Employees earn ₹600 per day, working between 15 to 25 days.
//Deductions: PF: 1.2% , TDS: 7%

//Output
//Task: How many employees can the company afford while staying within budget?

import React from 'react'

const BudgetSalary = () => {
  const employees = [
    { name: "Dhiva", daysWorked: 25, salary: 600 },
    { name: "Praveen", daysWorked: 15, salary: 600 },
    { name: "Virat", daysWorked: 20, salary: 600 },
    { name: "Ajith", daysWorked: 23, salary: 600 },
    { name: "Ronaldo", daysWorked: 21, salary: 600 }
  ]

  const calculateSalary = (daysWorked, salary) => {
    const totalSalary = salary * daysWorked;
    const pf = totalSalary * (1.5 / 100);
    const tdf = totalSalary * (1 / 100);
    const takeHomeSalary = totalSalary - pf - tdf;
    return { totalSalary, pf, tdf, takeHomeSalary };
  }
  return (
    <div>
    <h1>Company Budget and Salary Limit</h1>
      <table>
        <thead>
          <tr>
            <th>Employees</th>
            <th>Days Worked</th>
            <th>perDaySalary</th>
            <th>Total Salary</th>
            <th>Pf Deduction</th>
            <th>Tds Deduction</th>
            <th>Take Home Salary</th>
            <th>noOfEmployees</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => {
            const { totalSalary, pf, tdf, takeHomeSalary } = calculateSalary(emp.daysWorked, emp.salary);
            const remainingBudget = 500000 - totalSalary;
            const noOfEmployees = Math.floor(remainingBudget / takeHomeSalary);
            return (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.daysWorked}</td>
                <td>{emp.salary}</td>
                <td>{totalSalary}</td>
                <td>{pf}</td>
                <td>{tdf}</td>
                <td>{takeHomeSalary}</td>
                <td>{noOfEmployees}</td>
              </tr>
            );
          })}
        </tbody>     
    </table>
      
    </div >
  )
}

export default BudgetSalary



