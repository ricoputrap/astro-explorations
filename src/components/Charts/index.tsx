import type React from 'react'
import { faker } from '@faker-js/faker'
import VerticalBarChart from '../VerticalBarChart'
import { months } from './constants'

const Charts: React.FC = () => {
  return (
    <div>
      <h1>Charts</h1>

      <VerticalBarChart
        title="IT Bootcamp Student Attendance"
        labels={ months }
        datasets={[
          {
            label: 'Machine Learning',
            data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#3da9fc',
          },
          {
            label: 'Data Science',
            data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#3da9fc',
          },
          {
            label: 'Software Engineering',
            data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#ef4565',
          },
        ]}
      />
    </div>
  )
}

export default Charts