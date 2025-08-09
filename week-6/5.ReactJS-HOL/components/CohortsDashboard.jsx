import React from 'react';
import CohortDetails from './CohortDetails';
import styles from './CohortDetails.module.css';

const cohorts = [
  {
    cohortCode: 'INTADMDF10',
    technology: '.NET FSD',
    startDate: '22-Feb-2022',
    currentStatus: 'Scheduled',
    coachName: 'Aathma',
    trainerName: 'Jojo Jose'
  },
  {
    cohortCode: 'ADM21JF014',
    technology: 'Java FSD',
    startDate: '10-Sep-2021',
    currentStatus: 'Ongoing',
    coachName: 'Apoorv',
    trainerName: 'Elisa Smith'
  },
  {
    cohortCode: 'CDBJF21025',
    technology: 'Java FSD',
    startDate: '24-Dec-2021',
    currentStatus: 'Ongoing',
    coachName: 'Aathma',
    trainerName: 'John Doe'
  }
];

function CohortsDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Cohorts Details</div>
      <div className={styles.cohortList}>
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.cohortCode} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default CohortsDashboard;
