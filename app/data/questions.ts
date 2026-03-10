export interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  correctAnswer: string;
  communityVote?: string;
  explanation?: string;
}

export const examQuestions: Question[] = [
  {
    id: 1,
    question:
      'You are developing a new application on a VM that is on your corporate network. The application will use Java Database Connectivity (JDBC) to connect to Cloud SQL for PostgreSQL. Your Cloud SQL instance is configured with IP address 192.168.3.48, and SSL is disabled. You want to ensure that your application can access your database instance without requiring configuration changes to your database. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Define a connection string using your Google username and password to point to the external (public) IP address of your Cloud SQL instance.',
      },
      {
        label: 'B',
        text: 'Define a connection string using a database username and password to point to the internal (private) IP address of your Cloud SQL instance.',
      },
      {
        label: 'C',
        text: 'Define a connection string using Cloud SQL Auth proxy configured with a service account to point to the internal (private) IP address of your Cloud SQL instance.',
      },
      {
        label: 'D',
        text: 'Define a connection string using Cloud SQL Auth proxy configured with a service account to point to the external (public) IP address of your Cloud SQL instance.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (85%)',
  },
  {
    id: 2,
    question:
      'Your digital-native business runs its database workloads on Cloud SQL. Your website must be globally accessible 24/7. You need to prepare your Cloud SQL instance for high availability (HA). You want to follow Google-recommended practices. What should you do? (Choose two.)',
    options: [
      { label: 'A', text: 'Set up manual backups.' },
      {
        label: 'B',
        text: 'Create a PostgreSQL database on-premises as the HA option.',
      },
      {
        label: 'C',
        text: 'Configure single zone availability for automated backups.',
      },
      { label: 'D', text: 'Enable point-in-time recovery.' },
      { label: 'E', text: 'Schedule automated backups.' },
    ],
    correctAnswer: 'DE',
    communityVote: 'DE (100%)',
  },
  {
    id: 3,
    question:
      'Your company wants to move to Google Cloud. Your current data center is closing in six months. You are running a large, highly transactional Oracle application footprint on VMWare. You need to design a solution with minimal disruption to the current architecture and provide ease of migration to Google Cloud. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Migrate applications and Oracle databases to Google Cloud VMware Engine (VMware Engine).',
      },
      {
        label: 'B',
        text: 'Migrate applications and Oracle databases to Compute Engine.',
      },
      { label: 'C', text: 'Migrate applications to Cloud SQL.' },
      {
        label: 'D',
        text: 'Migrate applications and Oracle databases to Google Kubernetes Engine (GKE).',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 4,
    question:
      'Your customer has a global chat application that uses a multi-regional Cloud Spanner instance. The application has recently experienced degraded performance after a new version of the application was launched. Your customer asked you for assistance. During initial troubleshooting, you observed high read latency. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use query parameters to speed up frequently executed queries.',
      },
      {
        label: 'B',
        text: 'Change the Cloud Spanner configuration from multi-region to single region.',
      },
      {
        label: 'C',
        text: 'Use SQL statements to analyze SPANNER_SYS.READ_STATS* tables.',
      },
      {
        label: 'D',
        text: 'Use SQL statements to analyze SPANNER_SYS.QUERY_STATS* tables.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (93%)',
  },
  {
    id: 5,
    question:
      'Your company has PostgreSQL databases on-premises and on Amazon Web Services (AWS). You are planning multiple database migrations to Cloud SQL in an effort to reduce costs and downtime. You want to follow Google-recommended practices and use Google native data migration tools. You also want to closely monitor the migrations as part of the cutover strategy. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Database Migration Service to migrate all databases to Cloud SQL.',
      },
      {
        label: 'B',
        text: 'Use Database Migration Service for one-time migrations, and use third-party or partner tools for change data capture (CDC) style migrations.',
      },
      {
        label: 'C',
        text: 'Use data replication tools and CDC tools to enable migration.',
      },
      {
        label: 'D',
        text: 'Use a combination of Database Migration Service and partner tools to support the data migration strategy.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (97%)',
  },
  {
    id: 6,
    question:
      'You are setting up a Bare Metal Solution environment. You need to update the operating system to the latest version. You need to connect the Bare Metal Solution environment to the internet so you can receive software updates. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Setup a static external IP address in your VPC network.',
      },
      { label: 'B', text: 'Set up bring your own IP (BYOIP) in your VPC.' },
      {
        label: 'C',
        text: 'Set up a Cloud NAT gateway on the Compute Engine VM.',
      },
      { label: 'D', text: 'Set up Cloud NAT service.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (67%) D (33%)',
  },
  {
    id: 7,
    question:
      'Your organization is running a MySQL workload in Cloud SQL. Suddenly you see a degradation in database performance. You need to identify the root cause of the performance degradation. What should you do?',
    options: [
      { label: 'A', text: 'Use Logs Explorer to analyze log data.' },
      {
        label: 'B',
        text: 'Use Cloud Monitoring to monitor CPU, memory, and storage utilization metrics.',
      },
      {
        label: 'C',
        text: 'Use Error Reporting to count, analyze, and aggregate the data.',
      },
      {
        label: 'D',
        text: 'Use Cloud Debugger to inspect the state of an application.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },
  {
    id: 8,
    question:
      'You work for a large retail and ecommerce company that is starting to extend their business globally. Your company plans to migrate to Google Cloud. You want to use platforms that will scale easily, handle transactions with the least amount of latency, and provide a reliable customer experience. You need a storage layer for sales transactions and current inventory levels. You want to retain the same relational schema that your existing platform uses. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Store your data in Firestore in a multi-region location, and place your compute resources in one of the constituent regions.',
      },
      {
        label: 'B',
        text: 'Deploy Cloud Spanner using a multi-region instance, and place your compute resources close to the default leader region.',
      },
      {
        label: 'C',
        text: 'Build an in-memory cache in Memorystore, and deploy to the specific geographic regions where your application resides.',
      },
      {
        label: 'D',
        text: 'Deploy a Bigtable instance with a cluster in one region and a replica cluster in another geographic region.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },
  {
    id: 9,
    question:
      'You host an application in Google Cloud. The application is located in a single region and uses Cloud SQL for transactional data. Most of your users are located in the same time zone and expect the application to be available 7 days a week, from 6 AM to 10 PM. You want to ensure regular maintenance updates to your Cloud SQL instance without creating downtime for your users. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Configure a maintenance window during a period when no users will be on the system. Control the order of update by setting non-production instances to earlier and production instances to later.',
      },
      {
        label: 'B',
        text: 'Create your database with one primary node and one read replica in the region.',
      },
      {
        label: 'C',
        text: 'Enable maintenance notifications for users, and reschedule maintenance activities to a specific time after notifications have been sent.',
      },
      {
        label: 'D',
        text: 'Configure your Cloud SQL instance with high availability enabled.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (91%)',
  },
  {
    id: 10,
    question:
      'Your team recently released a new version of a highly consumed application to accommodate additional user traffic. Shortly after the release, you received an alert from your production monitoring team that there is consistently high replication lag between your primary instance and the read replicas of your Cloud SQL for MySQL instances. You need to resolve the replication lag. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Identify and optimize slow running queries, or set parallel replication flags.',
      },
      {
        label: 'B',
        text: 'Stop all running queries, and re-create the replicas.',
      },
      {
        label: 'C',
        text: 'Edit the primary instance to upgrade to a larger disk, and increase vCPU count.',
      },
      {
        label: 'D',
        text: 'Edit the primary instance to add additional memory.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (96%)',
  },
  {
    id: 11,
    question:
      'Your organization operates in a highly regulated industry. Separation of concerns (SoC) and security principle of least privilege (PoLP) are critical. The operations team consists of: Person A is a database administrator. Person B is an analyst who generates metric reports. Application C is responsible for automatic backups. You need to assign roles to team members for Cloud Spanner. Which roles should you assign?',
    options: [
      {
        label: 'A',
        text: 'roles/spanner.databaseAdmin for Person A, roles/spanner.databaseReader for Person B, roles/spanner.backupWriter for Application C',
      },
      {
        label: 'B',
        text: 'roles/spanner.databaseAdmin for Person A, roles/spanner.databaseReader for Person B, roles/spanner.backupAdmin for Application C',
      },
      {
        label: 'C',
        text: 'roles/spanner.databaseAdmin for Person A, roles/spanner.databaseUser for Person B, roles/spanner.databaseReader for Application C',
      },
      {
        label: 'D',
        text: 'roles/spanner.databaseAdmin for Person A, roles/spanner.databaseUser for Person B, roles/spanner.backupWriter for Application C',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 12,
    question:
      'You are designing an augmented reality game for iOS and Android devices. You plan to use Cloud Spanner as the primary backend database for game state storage and player authentication. You want to track in-game rewards that players unlock at every stage of the game. During the testing phase, you discovered that costs are much higher than anticipated, but the query response times are within the SLA. You want to follow Google-recommended practices. You need the database to be performant and highly available while you keep costs low. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Manually scale down the number of nodes after the peak period has passed.',
      },
      {
        label: 'B',
        text: 'Use interleaving to co-locate parent and child rows.',
      },
      {
        label: 'C',
        text: 'Use the Cloud Spanner query optimizer to determine the most efficient way to execute the SQL query.',
      },
      {
        label: 'D',
        text: 'Use granular instance sizing in Cloud Spanner and Autoscaler.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (94%)',
  },
  {
    id: 13,
    question:
      'You recently launched a new product to the US market. You currently have two Bigtable clusters in one US region to serve all the traffic. Your marketing team is planning an immediate expansion to APAC. You need to roll out the regional expansion while implementing high availability according to Google-recommended practices. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Maintain a target of 23% CPU utilization by locating: cluster-a in zone us-central1-a, cluster-b in zone europe-west1-d, cluster-c in zone asia-east1-b',
      },
      {
        label: 'B',
        text: 'Maintain a target of 23% CPU utilization by locating: cluster-a in zone us-central1-a, cluster-b in zone us-central1-b, cluster-c in zone us-east1-a',
      },
      {
        label: 'C',
        text: 'Maintain a target of 35% CPU utilization by locating: cluster-a in zone us-central1-a, cluster-b in zone australia-southeast1-a, cluster-c in zone europe-west1-d, cluster-d in zone asia-east1-b',
      },
      {
        label: 'D',
        text: 'Maintain a target of 35% CPU utilization by locating: cluster-a in zone us-central1-a, cluster-b in zone us-central2-a, cluster-c in zone asia-northeast1-b, cluster-d in zone asia-east1-b',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },
  {
    id: 14,
    question:
      'Your ecommerce website captures user clickstream data to analyze customer traffic patterns in real time and support personalization features on your website. You plan to analyze this data using big data tools. You need a low-latency solution that can store 8 TB of data and can scale to millions of read and write requests per second. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Write your data into Bigtable and use Dataproc and the Apache Hbase libraries for analysis.',
      },
      {
        label: 'B',
        text: 'Deploy a Cloud SQL environment with read replicas for improved performance. Use Datastream to export data to Cloud Storage and analyze with Dataproc and the Cloud Storage connector.',
      },
      {
        label: 'C',
        text: 'Use Memorystore to handle your low-latency requirements and for real-time analytics.',
      },
      {
        label: 'D',
        text: 'Stream your data into BigQuery and use Dataproc and the BigQuery Storage API to analyze large volumes of data.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (77%) D (23%)',
  },
  {
    id: 15,
    question:
      'Your company uses Cloud Spanner for a mission-critical inventory management system that is globally available. You recently loaded stock keeping unit (SKU) and product catalog data from a company acquisition and observed hotspots in the Cloud Spanner database. You want to follow Google-recommended schema design practices to avoid performance degradation. What should you do? (Choose two.)',
    options: [
      {
        label: 'A',
        text: 'Use an auto-incrementing value as the primary key.',
      },
      { label: 'B', text: 'Normalize the data model.' },
      {
        label: 'C',
        text: 'Promote low-cardinality attributes in multi-attribute primary keys.',
      },
      {
        label: 'D',
        text: 'Promote high-cardinality attributes in multi-attribute primary keys.',
      },
      {
        label: 'E',
        text: 'Use bit-reverse sequential value as the primary key.',
      },
    ],
    correctAnswer: 'DE',
    communityVote: 'DE (73%) CE (18%)',
  },
  {
    id: 16,
    question:
      'You are managing multiple applications connecting to a database on Cloud SQL for PostgreSQL. You need to be able to monitor database performance to easily identify applications with long-running and resource-intensive queries. What should you do?',
    options: [
      { label: 'A', text: 'Use log messages produced by Cloud SQL.' },
      { label: 'B', text: 'Use Query Insights for Cloud SQL.' },
      {
        label: 'C',
        text: 'Use the Cloud Monitoring dashboard with available metrics from Cloud SQL.',
      },
      {
        label: 'D',
        text: 'Use Cloud SQL instance monitoring in the Google Cloud Console.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (88%)',
  },
  {
    id: 17,
    question:
      'You are building an application that allows users to customize their website and mobile experiences. The application will capture user information and preferences. User profiles have a dynamic schema, and users can add or delete information from their profile. You need to ensure that user changes automatically trigger updates to your downstream BigQuery data warehouse. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Store your data in Bigtable, and use the user identifier as the key. Use one column family to store user profile data, and use another column family to store user preferences.',
      },
      {
        label: 'B',
        text: 'Use Cloud SQL, and create different tables for user profile data and user preferences from your recommendations model. Use SQL to join the user profile data and preferences',
      },
      {
        label: 'C',
        text: 'Use Firestore in Native mode, and store user profile data as a document. Update the user profile with preferences specific to that user and use the user identifier to query.',
      },
      {
        label: 'D',
        text: 'Use Firestore in Datastore mode, and store user profile data as a document. Update the user profile with preferences specific to that user and use the user identifier to query.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (89%)',
  },
  {
    id: 18,
    question:
      'Your application uses Cloud SQL for MySQL. Your users run reports on data that relies on near-real time; however, the additional analytics caused excessive load on the primary database. You created a read replica for the analytics workloads, but now your users are complaining about the lag in data changes and that their reports are still slow. You need to improve the report performance and shorten the lag in data replication without making changes to the current reports. Which two approaches should you implement? (Choose two.)',
    options: [
      { label: 'A', text: 'Create secondary indexes on the replica.' },
      {
        label: 'B',
        text: 'Create additional read replicas, and partition your analytics users to use different read replicas.',
      },
      {
        label: 'C',
        text: 'Disable replication on the read replica, and set the flag for parallel replication on the read replica. Re-enable replication and optimize performance by setting flags on the primary instance.',
      },
      {
        label: 'D',
        text: 'Disable replication on the primary instance, and set the flag for parallel replication on the primary instance. Re-enable replication and optimize performance by setting flags on the read replica.',
      },
      {
        label: 'E',
        text: 'Move your analytics workloads to BigQuery, and set up a streaming pipeline to move data and update BigQuery.',
      },
    ],
    correctAnswer: 'BC',
    communityVote: 'BC (50%) AC (17%)',
  },
  {
    id: 19,
    question:
      'You are evaluating Cloud SQL for PostgreSQL as a possible destination for your on-premises PostgreSQL instances. Geography is becoming increasingly relevant to customer privacy worldwide. Your solution must support data residency requirements and include a strategy to: configure where data is stored, control where the encryption keys are stored, govern the access to data. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Replicate Cloud SQL databases across different zones.',
      },
      {
        label: 'B',
        text: 'Create a Cloud SQL for PostgreSQL instance on Google Cloud for the data that does not need to adhere to data residency requirements. Keep the data that must adhere to data residency requirements on-premises. Make application changes to support both databases.',
      },
      {
        label: 'C',
        text: 'Allow application access to data only if the users are in the same region as the Google Cloud region for the Cloud SQL for PostgreSQL database.',
      },
      {
        label: 'D',
        text: 'Use features like customer-managed encryption keys (CMEK), VPC Service Controls, and Identity and Access Management (IAM) policies.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },
  {
    id: 20,
    question:
      'Your customer is running a MySQL database on-premises with read replicas. The nightly incremental backups are expensive and add maintenance overhead. You want to follow Google-recommended practices to migrate the database to Google Cloud, and you need to ensure minimal downtime. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a Google Kubernetes Engine (GKE) cluster, install MySQL on the cluster, and then import the dump file.',
      },
      {
        label: 'B',
        text: 'Use the mysqldump utility to take a backup of the existing on-premises database, and then import it into Cloud SQL.',
      },
      {
        label: 'C',
        text: 'Create a Compute Engine VM, install MySQL on the VM, and then import the dump file.',
      },
      {
        label: 'D',
        text: 'Create an external replica, and use Cloud SQL to synchronize the data to the replica.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (68%) B (32%)',
  },
  {
    id: 21,
    question:
      'Your team uses thousands of connected IoT devices to collect device maintenance data for your oil and gas customers in real time. You want to design inspection routines, device repair, and replacement schedules based on insights gathered from the data produced by these devices. You need a managed solution that is highly scalable, supports a multi-cloud strategy, and offers low latency for these IoT devices. What should you do?',
    options: [
      { label: 'A', text: 'Use Firestore with Looker.' },
      { label: 'B', text: 'Use Cloud Spanner with Data Studio.' },
      { label: 'C', text: 'Use MongoDB Atlas with Charts.' },
      { label: 'D', text: 'Use Bigtable with Looker.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (50%) C (48%)',
  },
  {
    id: 22,
    question:
      'Your application follows a microservices architecture and uses a single large Cloud SQL instance, which is starting to have performance issues as your application grows. In the Cloud Monitoring dashboard, the CPU utilization looks normal. You want to follow Google-recommended practices to resolve and prevent these performance issues while avoiding any major refactoring. What should you do?',
    options: [
      { label: 'A', text: 'Use Cloud Spanner instead of Cloud SQL.' },
      { label: 'B', text: 'Increase the number of CPUs for your instance.' },
      { label: 'C', text: 'Increase the storage size for the instance.' },
      { label: 'D', text: 'Use many smaller Cloud SQL instances.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (52%) C (48%)',
  },
  {
    id: 23,
    question:
      'You need to perform a one-time migration of data from a running Cloud SQL for MySQL instance in the us-central1 region to a new Cloud SQL for MySQL instance in the us-east1 region. You want to follow Google-recommended practices to minimize performance impact on the currently running instance. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create and run a Dataflow job that uses JdbcIO to copy data from one Cloud SQL instance to another.',
      },
      {
        label: 'B',
        text: 'Create two Datastream connection profiles, and use them to create a stream from one Cloud SQL instance to another.',
      },
      {
        label: 'C',
        text: 'Create a SQL dump file in Cloud Storage using a temporary instance, and then use that file to import into a new instance.',
      },
      {
        label: 'D',
        text: 'Create a CSV file by running the SQL statement SELECT...INTO OUTFILE, copy the file to a Cloud Storage bucket, and import it into a new instance.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },
  {
    id: 24,
    question:
      'You are running a mission-critical application on a Cloud SQL for PostgreSQL database with a multi-zonal setup. The primary and read replica instances are in the same region but in different zones. You need to ensure that you split the application load between both instances. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud Load Balancing for load balancing between the Cloud SQL primary and read replica instances.',
      },
      {
        label: 'B',
        text: 'Use PgBouncer to set up database connection pooling between the Cloud SQL primary and read replica instances.',
      },
      {
        label: 'C',
        text: 'Use HTTP(S) Load Balancing for database connection pooling between the Cloud SQL primary and read replica instances.',
      },
      {
        label: 'D',
        text: 'Use the Cloud SQL Auth proxy for database connection pooling between the Cloud SQL primary and read replica instances.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (57%) A (43%)',
  },
  {
    id: 25,
    question:
      'Your organization deployed a new version of a critical application that uses Cloud SQL for MySQL with high availability (HA) and binary logging enabled to store transactional information. The latest release of the application had an error that caused massive data corruption in your Cloud SQL for MySQL database. You need to minimize data loss. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Open the Google Cloud Console, navigate to SQL > Backups, and select the last version of the automated backup before the corruption.',
      },
      {
        label: 'B',
        text: 'Reload the Cloud SQL for MySQL database using the LOAD DATA command to load data from CSV files that were used to initialize the instance.',
      },
      {
        label: 'C',
        text: 'Perform a point-in-time recovery of your Cloud SQL for MySQL database, selecting a date and time before the data was corrupted.',
      },
      {
        label: 'D',
        text: 'Fail over to the Cloud SQL for MySQL HA instance. Use that instance to recover the transactions that occurred before the corruption.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (89%)',
  },
  {
    id: 26,
    question:
      'You plan to use Database Migration Service to migrate data from a PostgreSQL on-premises instance to Cloud SQL. You need to identify the prerequisites for creating and automating the task. What should you do? (Choose two.)',
    options: [
      {
        label: 'A',
        text: 'Drop or disable all users except database administration users.',
      },
      {
        label: 'B',
        text: 'Disable all foreign key constraints on the source PostgreSQL database.',
      },
      {
        label: 'C',
        text: 'Ensure that all PostgreSQL tables have a primary key.',
      },
      {
        label: 'D',
        text: 'Shut down the database before the Data Migration Service task is started.',
      },
      {
        label: 'E',
        text: 'Ensure that pglogical is installed on the source PostgreSQL database.',
      },
    ],
    correctAnswer: 'CE',
    communityVote: 'CE (80%) BE (20%)',
  },
  {
    id: 27,
    question:
      'You are using Compute Engine on Google Cloud and your data center to manage a set of MySQL databases in a hybrid configuration. You need to create replicas to scale reads and to offload part of the management operation. What should you do?',
    options: [
      { label: 'A', text: 'Use external server replication.' },
      { label: 'B', text: 'Use Data Migration Service.' },
      { label: 'C', text: 'Use Cloud SQL for MySQL external replica.' },
      { label: 'D', text: 'Use the mysqldump utility and binary logs.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (44%) A (44%)',
  },
  {
    id: 28,
    question:
      'Your company is shutting down their data center and migrating several MySQL and PostgreSQL databases to Google Cloud. Your database operations team is severely constrained by ongoing production releases and the lack of capacity for additional on-premises backups. You want to ensure that the scheduled migrations happen with minimal downtime and that the Google Cloud databases stay in sync with the on-premises data changes until the applications can cut over. What should you do? (Choose two.)',
    options: [
      {
        label: 'A',
        text: 'Use Database Migration Service to migrate the databases to Cloud SQL.',
      },
      {
        label: 'B',
        text: 'Use a cross-region read replica to migrate the databases to Cloud SQL.',
      },
      {
        label: 'C',
        text: 'Use replication from an external server to migrate the databases to Cloud SQL.',
      },
      {
        label: 'D',
        text: 'Use an external read replica to migrate the databases to Cloud SQL.',
      },
      {
        label: 'E',
        text: 'Use a read replica to migrate the databases to Cloud SQL.',
      },
    ],
    correctAnswer: 'AC',
    communityVote: 'AC (88%)',
  },
  {
    id: 29,
    question:
      'Your company is migrating the existing infrastructure for a highly transactional application to Google Cloud. You have several databases in a MySQL database instance and need to decide how to transfer the data to Cloud SQL. You need to minimize the downtime for the migration of your 500 GB instance. What should you do?',
    options: [
      {
        label: 'A',
        text: '1. Create a Cloud SQL for MySQL instance for your databases, and configure Datastream to stream your database changes to Cloud SQL. 2. Select the Backfill historical data check box on your stream configuration to initiate Datastream to backfill any data that is out of sync between the source and destination. 3. Delete your stream when all changes are moved to Cloud SQL for MySQL, and update your application to use the new instance.',
      },
      {
        label: 'B',
        text: '1. Create migration job using Database Migration Service. 2. Set the migration job type to Continuous, and allow the databases to complete the full dump phase and start sending data in change data capture (CDC) mode. 3. Wait for the replication delay to minimize, initiate a promotion of the new Cloud SQL instance, and wait for the migration job to complete. 4. Update your application connections to the new instance.',
      },
      {
        label: 'C',
        text: '1. Create migration job using Database Migration Service. 2. Set the migration job type to One-time, and perform this migration during a maintenance window. 3. Stop all write workloads to the source database and initiate the dump. Wait for the dump to be loaded into the Cloud SQL destination database and the destination database to be promoted to the primary database. 4. Update your application connections to the new instance.',
      },
      {
        label: 'D',
        text: '1. Use the mysqldump utility to manually initiate a backup of MySQL during the application maintenance window. 2. Move the files to Cloud Storage, and import each database into your Cloud SQL instance. 3. Continue to dump each database until all the databases are migrated. 4. Update your application connections to the new instance.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },
  {
    id: 30,
    question:
      'Your company uses the Cloud SQL out-of-disk recommender to analyze the storage utilization trends of production databases over the last 30 days. Your database operations team uses these recommendations to proactively monitor storage utilization and implement corrective actions. You receive a recommendation that the instance is likely to run out of disk space. What should you do to address this storage alert?',
    options: [
      { label: 'A', text: 'Normalize the database to the third normal form.' },
      {
        label: 'B',
        text: 'Compress the data using a different compression algorithm.',
      },
      {
        label: 'C',
        text: 'Manually or automatically increase the storage capacity.',
      },
      { label: 'D', text: 'Create another schema to load older data.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },
  {
    id: 31,
    question:
      'You are managing a mission-critical Cloud SQL for PostgreSQL instance. Your application team is running important transactions on the database when another DBA starts an on-demand backup. You want to verify the status of the backup. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Check the cloudsql.googleapis.com/postgres.log instance log.',
      },
      { label: 'B', text: 'Perform the gcloud sql operations list command.' },
      { label: 'C', text: 'Use Cloud Audit Logs to verify the status.' },
      { label: 'D', text: 'Use the Google Cloud Console.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (85%)',
  },
  {
    id: 32,
    question:
      'You support a consumer inventory application that runs on a multi-region instance of Cloud Spanner. A customer opened a support ticket to complain about slow response times. You notice a Cloud Monitoring alert about high CPU utilization. You want to follow Google-recommended practices to address the CPU performance issue. What should you do first?',
    options: [
      { label: 'A', text: 'Increase the number of processing units.' },
      {
        label: 'B',
        text: 'Modify the database schema, and add additional indexes.',
      },
      {
        label: 'C',
        text: 'Shard data required by the application into multiple instances.',
      },
      { label: 'D', text: 'Decrease the number of processing units.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (90%)',
  },
  {
    id: 33,
    question:
      'Your company uses Bigtable for a user-facing application that displays a low-latency real-time dashboard. You need to recommend the optimal storage type for this read-intensive database. What should you do?',
    options: [
      { label: 'A', text: 'Recommend solid-state drives (SSD).' },
      {
        label: 'B',
        text: 'Recommend splitting the Bigtable instance into two instances in order to load balance the concurrent reads.',
      },
      { label: 'C', text: 'Recommend hard disk drives (HDD).' },
      { label: 'D', text: 'Recommend mixed storage types.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 34,
    question:
      'Your organization has a critical business app that is running with a Cloud SQL for MySQL backend database. Your company wants to build the most fault-tolerant and highly available solution possible. You need to ensure that the application database can survive a zonal and regional failure with a primary region of us-central1 and the backup region of us-east1. What should you do?',
    options: [
      {
        label: 'A',
        text: '1. Provision a Cloud SQL for MySQL instance in us-central1-a. 2. Create a multiple-zone instance in us-west1-b. 3. Create a read replica in us-east1-c.',
      },
      {
        label: 'B',
        text: '1. Provision a Cloud SQL for MySQL instance in us-central1-a. 2. Create a multiple-zone instance in us-central1-b. 3. Create a read replica in us-east1-b.',
      },
      {
        label: 'C',
        text: '1. Provision a Cloud SQL for MySQL instance in us-central1-a. 2. Create a multiple-zone instance in us-east-b. 3. Create a read replica in us-east1-c.',
      },
      {
        label: 'D',
        text: '1. Provision a Cloud SQL for MySQL instance in us-central1-a. 2. Create a multiple-zone instance in us-east1-b. 3. Create a read replica in us-central1-b.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },
  {
    id: 35,
    question:
      'You are building an Android game that needs to store data on a Google Cloud serverless database. The database will log user activity, store user preferences, and receive in-game updates. The target audience resides in developing countries that have intermittent internet connectivity. You need to ensure that the game can synchronize game data to the backend database whenever an internet network is available. What should you do?',
    options: [
      { label: 'A', text: 'Use Firestore.' },
      {
        label: 'B',
        text: 'Use Cloud SQL with an external (public) IP address.',
      },
      { label: 'C', text: 'Use an in-app embedded database.' },
      { label: 'D', text: 'Use Cloud Spanner.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 36,
    question:
      'You released a popular mobile game and are using a 50 TB Cloud Spanner instance to store game data in a PITR-enabled production environment. When you analyzed the game statistics, you realized that some players are exploiting a loophole to gather more points to get on the leaderboard. Another DBA accidentally ran an emergency bugfix script that corrupted some of the data in the production environment. You need to determine the extent of the data corruption and restore the production environment. What should you do? (Choose two.)',
    options: [
      {
        label: 'A',
        text: 'If the corruption is significant, use backup and restore, and specify a recovery timestamp.',
      },
      {
        label: 'B',
        text: 'If the corruption is significant, perform a stale read and specify a recovery timestamp. Write the results back.',
      },
      {
        label: 'C',
        text: 'If the corruption is significant, use import and export.',
      },
      {
        label: 'D',
        text: 'If the corruption is insignificant, use backup and restore, and specify a recovery timestamp.',
      },
      {
        label: 'E',
        text: 'If the corruption is insignificant, perform a stale read and specify a recovery timestamp. Write the results back.',
      },
    ],
    correctAnswer: 'AE',
    communityVote: 'AE (86%)',
  },
  {
    id: 37,
    question:
      'You are starting a large CSV import into a Cloud SQL for MySQL instance that has many open connections. You checked memory and CPU usage, and sufficient resources are available. You want to follow Google-recommended practices to ensure that the import will not time out. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Close idle connections or restart the instance before beginning the import operation.',
      },
      {
        label: 'B',
        text: 'Increase the amount of memory allocated to your instance.',
      },
      {
        label: 'C',
        text: 'Ensure that the service account has the Storage Admin role.',
      },
      {
        label: 'D',
        text: 'Increase the number of CPUs for the instance to ensure that it can handle the additional import operation.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 38,
    question:
      'You are migrating your data center to Google Cloud. You plan to migrate your applications to Compute Engine and your Oracle databases to Bare Metal Solution for Oracle. You must ensure that the applications in different projects can communicate securely and efficiently with the Oracle databases. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Set up a Shared VPC, configure multiple service projects, and create firewall rules.',
      },
      { label: 'B', text: 'Set up Serverless VPC Access.' },
      { label: 'C', text: 'Set up Private Service Connect.' },
      { label: 'D', text: 'Set up Traffic Director.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 39,
    question:
      'You are running an instance of Cloud Spanner as the backend of your ecommerce website. You learn that the quality assurance (QA) team has doubled the number of their test cases. You need to create a copy of your Cloud Spanner database in a new test environment to accommodate the additional test cases. You want to follow Google-recommended practices. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud Functions to run the export in Avro format.',
      },
      {
        label: 'B',
        text: 'Use Cloud Functions to run the export in text format.',
      },
      { label: 'C', text: 'Use Dataflow to run the export in Avro format.' },
      { label: 'D', text: 'Use Dataflow to run the export in text format.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },
  {
    id: 40,
    question:
      'You need to redesign the architecture of an application that currently uses Cloud SQL for PostgreSQL. The users of the application complain about slow query response times. You want to enhance your application architecture to offer sub-millisecond query latency. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Configure Firestore, and modify your application to offload queries.',
      },
      {
        label: 'B',
        text: 'Configure Bigtable, and modify your application to offload queries.',
      },
      {
        label: 'C',
        text: 'Configure Cloud SQL for PostgreSQL read replicas to offload queries.',
      },
      {
        label: 'D',
        text: 'Configure Memorystore, and modify your application to offload queries.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (81%)',
  },
  {
    id: 41,
    question:
      'You need to migrate existing databases from Microsoft SQL Server 2016 Standard Edition on a single Windows Server 2019 Datacenter Edition to a single Cloud SQL for SQL Server instance. During the discovery phase of your project, you notice that your on-premises server peaks at around 25,000 read IOPS. You need to ensure that your Cloud SQL instance is sized appropriately to maximize read performance. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a SQL Server 2019 Standard on Standard machine type with 4 vCPUs, 15 GB of RAM, and 800 GB of solid-state drive (SSD).',
      },
      {
        label: 'B',
        text: 'Create a SQL Server 2019 Standard on High Memory machine type with at least 16 vCPUs, 104 GB of RAM, and 200 GB of SSD.',
      },
      {
        label: 'C',
        text: 'Create a SQL Server 2019 Standard on High Memory machine type with 16 vCPUs, 104 GB of RAM, and 4 TB of SSD. Most Voted',
      },
      {
        label: 'D',
        text: 'Create a SQL Server 2019 Enterprise on High Memory machine type with 16 vCPUs, 104 GB of RAM, and 500 GB of SSD.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },
  {
    id: 42,
    question:
      'You are managing a small Cloud SQL instance for developers to do testing. The instance is not critical and has a recovery point objective (RPO) of several days. You want to minimize ongoing costs for this instance. What should you do?',
    options: [
      {
        label: 'A',
        text: ' Take no backups, and turn off transaction log retention.',
      },
      {
        label: 'B',
        text: 'Take one manual backup per day, and turn off transaction log retention.',
      },
      {
        label: 'C',
        text: 'Turn on automated backup, and turn off transaction log retention.',
      },
      {
        label: 'D',
        text: 'Turn on automated backup, and turn on transaction log retention.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },
  {
    id: 43,
    question:
      'You manage a meeting booking application that uses Cloud SQL. During an important launch, the Cloud SQL instance went through a maintenance event that resulted in a downtime of more than 5 minutes and adversely affected your production application. You need to immediately address the maintenance issue to prevent any unplanned events in the future. What should you do?',
    options: [
      {
        label: 'A',
        text: "Set your production instance's maintenance window to non-business hours.",
      },
      {
        label: 'B',
        text: 'Migrate the Cloud SQL instance to Cloud Spanner to avoid any future disruptions due to maintenance.',
      },
      {
        label: 'C',
        text: 'Contact Support to understand why your Cloud SQL instance had a downtime of more than 5 minutes.',
      },
      {
        label: 'D',
        text: 'Use Cloud Scheduler to schedule a maintenance window of no longer than 5 minutes.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 44,
    question:
      'You are designing a highly available (HA) Cloud SQL for PostgreSQL instance that will be used by 100 databases. Each database contains 80 tables that were migrated from your on-premises environment to Google Cloud. The applications that use these databases are located in multiple regions in the US, and you need to ensure that read and write operations have low latency. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Deploy 2 Cloud SQL instances in the us-central1 region with HA enabled, and create read replicas in us-east1 and us-west1.',
      },
      {
        label: 'B',
        text: 'Deploy 2 Cloud SQL instances in the us-central1 region, and create read replicas in us-east1 and us-west1.',
      },
      {
        label: 'C',
        text: 'Deploy 4 Cloud SQL instances in the us-central1 region with HA enabled, and create read replicas in us-central1, us-east1, and us-west1.',
      },
      {
        label: 'D',
        text: 'Deploy 4 Cloud SQL instances in the us-central1 region, and create read replicas in us-central1, us-east1 and us-west1.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (65%), C (35%)',
  },

  {
    id: 45,
    question:
      'You work in the logistics department. Your data analysis team needs daily extracts from Cloud SQL for MySQL to train a machine learning model. The model will be used to optimize next-day routes. You need to export the data in CSV format. You want to follow Google-recommended practices. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud Scheduler to trigger a Cloud Function that will run a select * from table(s) query to call the cloudsql.instances.export API.',
      },
      {
        label: 'B',
        text: 'Use Cloud Scheduler to trigger a Cloud Function through Pub/Sub to call the cloudsql.instances.export API.',
      },
      {
        label: 'C',
        text: 'Use Cloud Composer to orchestrate an export by calling the cloudsql.instances.export API.',
      },
      {
        label: 'D',
        text: 'Use Cloud Composer to execute a select * from table(s) query and export results.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (62%), C (24%), Others (14%)',
  },

  {
    id: 46,
    question:
      'You are choosing a database backend for a new application. The application will ingest data points from IoT sensors. You need to ensure that the application can scale up to millions of requests per second with sub-10ms latency and store up to 100 TB of history. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud SQL with read replicas for throughput.',
      },
      {
        label: 'B',
        text: 'Use Firestore, and rely on automatic serverless scaling.',
      },
      {
        label: 'C',
        text: 'Use Memorystore for Memcached, and add nodes as necessary to achieve the required throughput.',
      },
      {
        label: 'D',
        text: 'Use Bigtable, and add nodes as necessary to achieve the required throughput.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (92%), Others (8%)',
  },

  {
    id: 47,
    question:
      'You are designing a payments processing application on Google Cloud. The application must continue to serve requests and avoid any user disruption if a regional failure occurs. You need to use AES-256 to encrypt data in the database, and you want to control where you store the encryption key. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud Spanner with a customer-managed encryption key (CMEK).',
      },
      {
        label: 'B',
        text: 'Use Cloud Spanner with default encryption.',
      },
      {
        label: 'C',
        text: 'Use Cloud SQL with a customer-managed encryption key (CMEK).',
      },
      {
        label: 'D',
        text: 'Use Bigtable with default encryption.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (89%), Others (11%)',
  },

  {
    id: 48,
    question:
      'You are managing a Cloud SQL for MySQL environment in Google Cloud. You have deployed a primary instance in Zone A and a read replica instance in Zone B, both in the same region. You are notified that the replica instance in Zone B was unavailable for 10 minutes. You need to ensure that the read replica instance is still working. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use the Google Cloud Console or gcloud CLI to manually create a new clone database.',
      },
      {
        label: 'B',
        text: 'Use the Google Cloud Console or gcloud CLI to manually create a new failover replica from backup.',
      },
      {
        label: 'C',
        text: 'Verify that the new replica is created automatically.',
      },
      {
        label: 'D',
        text: 'Start the original primary instance and resume replication.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (47%), B (29%), D (24%)',
  },
  {
    id: 49,
    question:
      'You are migrating an on-premises application to Google Cloud. The application requires a high availability (HA) PostgreSQL database to support business-critical functions. Your company disaster recovery strategy requires a recovery time objective (RTO) and recovery point objective (RPO) within 30 minutes of failure. You plan to use a Google Cloud managed service. What should you do to maximize uptime for your application?',
    options: [
      {
        label: 'A',
        text: 'Deploy Cloud SQL for PostgreSQL in a regional configuration. Create a read replica in a different zone in the same region and a read replica in another region for disaster recovery.',
      },
      {
        label: 'B',
        text: 'Deploy Cloud SQL for PostgreSQL in a regional configuration with HA enabled. Take periodic backups, and use this backup to restore to a new Cloud SQL instance in another region during a disaster recovery event.',
      },
      {
        label: 'C',
        text: 'Deploy Cloud SQL for PostgreSQL in a regional configuration with HA enabled. Create a cross-region read replica, and promote the read replica as the primary node for disaster recovery.',
      },
      {
        label: 'D',
        text: 'Migrate the PostgreSQL database to multi-regional Cloud Spanner so that a single region outage will not affect your application.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 50,
    question:
      'Your team is running a Cloud SQL for MySQL instance with a 5 TB database that must be available 24/7. You need to save database backups on object storage with minimal operational overhead or risk to your production workloads. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud SQL serverless exports.',
      },
      {
        label: 'B',
        text: 'Create a read replica, and then use the mysqldump utility to export each table.',
      },
      {
        label: 'C',
        text: 'Clone the Cloud SQL instance, and then use the mysqldump utility to export the data.',
      },
      {
        label: 'D',
        text: 'Use the mysqldump utility on the primary database instance to export the backup.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (90%), Others (10%)',
  },
  {
    id: 51,
    question:
      'You are deploying a new Cloud SQL instance on Google Cloud using the Cloud SQL Auth proxy. You have identified snippets of application code that need to access the new Cloud SQL instance. The snippets reside and execute on an application server running on a Compute Engine machine. You want to follow Google-recommended practices to set up IAM as quickly and securely as possible. What should you do?',
    options: [
      {
        label: 'A',
        text: 'For each application code, set up a common shared user account.',
      },
      {
        label: 'B',
        text: 'For each application code, set up a dedicated user account.',
      },
      {
        label: 'C',
        text: 'For the application server, set up a service account.',
      },
      {
        label: 'D',
        text: 'For the application server, set up a common shared user account.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 52,
    question:
      'Your organization is running a low-latency reporting application on Microsoft SQL Server using SSAS, SSRS, and SSIS in an on-premises environment. You want to migrate the SQL Server instances to Google Cloud with minimal disruption to the existing architecture. What should you do?',
    options: [
      { label: 'A', text: 'Migrate to Cloud SQL for SQL Server.' },
      { label: 'B', text: 'Migrate to Cloud SQL for PostgreSQL.' },
      { label: 'C', text: 'Migrate to Compute Engine.' },
      { label: 'D', text: 'Migrate to Google Kubernetes Engine (GKE).' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 53,
    question:
      'An analytics team needs to read data from Cloud SQL for SQL Server and update a table in Cloud Spanner. You need to create a service account and grant least-privilege access using predefined roles. What roles should you assign?',
    options: [
      {
        label: 'A',
        text: 'roles/cloudsql.viewer and roles/spanner.databaseUser',
      },
      { label: 'B', text: 'roles/cloudsql.editor and roles/spanner.admin' },
      {
        label: 'C',
        text: 'roles/cloudsql.client and roles/spanner.databaseReader',
      },
      {
        label: 'D',
        text: 'roles/cloudsql.instanceUser and roles/spanner.databaseUser',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (62%), D (38%)',
  },

  {
    id: 54,
    question:
      'You are designing a new airline ticketing database application that requires strong consistency, support for structured and JSON data, and global multi-region scaling. What should you use?',
    options: [
      {
        label: 'A',
        text: 'Cloud SQL for PostgreSQL with cross-region replicas.',
      },
      { label: 'B', text: 'Cloud Spanner in a multi-region configuration.' },
      { label: 'C', text: 'Firestore in Datastore mode.' },
      { label: 'D', text: 'Bigtable with clusters in multiple regions.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (78%), C (22%)',
  },

  {
    id: 55,
    question:
      'You are building an application on Cloud Run that uses Cloud SQL. You want the database to only accept connections from applications in your VPC. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use public IP with firewall rules and Cloud SQL Auth proxy.',
      },
      {
        label: 'B',
        text: 'Use public IP with firewall rules and connection pooling.',
      },
      {
        label: 'C',
        text: 'Use private IP, private service connection, Serverless VPC connector, and Cloud SQL Auth proxy.',
      },
      {
        label: 'D',
        text: 'Use private IP, private service connection, Serverless VPC connector, and connection pooling.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (65%), C (35%)',
  },

  {
    id: 56,
    question:
      "While troubleshooting Cloud SQL Proxy logs you see the error: 'Error 403: Access Not Configured'. What should you do?",
    options: [
      {
        label: 'A',
        text: 'Check app.yaml for incorrect instance connection name.',
      },
      {
        label: 'B',
        text: 'Check if the service account has cloudsql.instances.connect permission.',
      },
      { label: 'C', text: 'Enable the Cloud SQL Admin API.' },
      { label: 'D', text: 'Ensure the instance uses a public IP.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (89%)',
  },

  {
    id: 57,
    question:
      'You are building a centralized inventory system for 200 stores with 500 GB of data each. You want minimal rollout disruption and automatic scaling up or down during nights and holidays. What should you do?',
    options: [
      { label: 'A', text: 'Oracle RAC on Bare Metal Solution.' },
      { label: 'B', text: 'Sharded Cloud SQL instances.' },
      { label: 'C', text: 'Bigtable cluster with autoscaling.' },
      { label: 'D', text: 'Cloud Spanner with custom autoscaling.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (60%), B (40%)',
  },

  {
    id: 58,
    question:
      'Your organization must track production database rollouts for auditing compliance on Cloud Spanner databases. What should you do?',
    options: [
      { label: 'A', text: 'Use replication to roll out changes.' },
      { label: 'B', text: 'Use backup and restore.' },
      { label: 'C', text: 'Use Liquibase to manage database changes.' },
      { label: 'D', text: 'Manually capture DBA audit logs.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (80%), B (20%)',
  },

  {
    id: 59,
    question:
      'A production Cloud SQL MySQL instance (16 vCPUs, 104 GB RAM) is running at 90-100% CPU. You need to scale up with minimal interruption. What should you do?',
    options: [
      { label: 'A', text: 'Run gcloud sql instances patch to increase vCPUs.' },
      { label: 'B', text: 'Update a MySQL flag to increase vCPUs.' },
      { label: 'C', text: 'Run gcloud compute instances update.' },
      { label: 'D', text: 'Backup and restore to a larger instance.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 60,
    question:
      'You are configuring Cloud SQL for PostgreSQL with one primary, one standby, and one read replica. What is the recommended high availability configuration?',
    options: [
      {
        label: 'A',
        text: 'Primary in zone A, standby in zone C, read replica in zone B in the same region.',
      },
      { label: 'B', text: 'Primary and standby in zone A, replica in zone B.' },
      {
        label: 'C',
        text: 'Primary in one region, standby in second region, replica in third region.',
      },
      { label: 'D', text: 'All instances in zone A.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 61,
    question:
      'You run a transactional application on Cloud SQL for PostgreSQL with HA. You want to restore the database to a previous known good state. What should you do?',
    options: [
      { label: 'A', text: 'Clone from read replica in the same region.' },
      { label: 'B', text: 'Clone from read replica in another zone.' },
      {
        label: 'C',
        text: 'Use point-in-time recovery to restore to two hours earlier.',
      },
      { label: 'D', text: "Import last week's dump file." },
    ],
    correctAnswer: 'C',
    communityVote: 'C (89%)',
  },

  {
    id: 62,
    question:
      'Your organization requires encryption keys with locality control for Cloud SQL PostgreSQL databases and control of the key lifecycle. What should you do?',
    options: [
      { label: 'A', text: 'Use Google-managed encryption keys.' },
      { label: 'B', text: 'Use customer-managed encryption keys.' },
      {
        label: 'C',
        text: 'Encrypt the persistent disk with Google-managed keys.',
      },
      {
        label: 'D',
        text: 'Encrypt the persistent disk with customer-managed keys.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 63,
    question:
      'Your viral application uses Cloud SQL MySQL with HDD storage and experiences slow disk performance. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Export data and import into a new instance with SSD.',
      },
      { label: 'B', text: 'Edit the instance and change HDD to SSD.' },
      { label: 'C', text: 'Create HA instance with SSD and failover.' },
      { label: 'D', text: 'Create SSD read replica and failover.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 64,
    question:
      'A new application reads statistics from an existing Cloud Spanner database for dashboards. Following IAM best practices, what should you do?',
    options: [
      { label: 'A', text: 'Reuse the existing service account.' },
      {
        label: 'B',
        text: 'Create a new service account with Spanner Admin role.',
      },
      {
        label: 'C',
        text: 'Create a new service account with Spanner Database Reader role.',
      },
      {
        label: 'D',
        text: 'Grant spanner.databases.select permission directly.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (83%), B (17%)',
  },

  {
    id: 65,
    question:
      'Your DevOps team instrumented microservices with Sqlcommenter for Cloud SQL. Some microservice calls are failing and you must find the root cause. What should you do?',
    options: [
      { label: 'A', text: 'Monitor Query Insights.' },
      { label: 'B', text: 'Monitor CPU utilization metrics.' },
      { label: 'C', text: 'Check Cloud SQL recommenders.' },
      { label: 'D', text: 'Use Cloud Trace for failing application requests.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (57%), A (43%)',
  },

  {
    id: 66,
    question:
      'You are designing a global read-only database for public park information with nightly batch updates. You want an open-source SQL database. What should you use?',
    options: [
      { label: 'A', text: 'Bigtable with multi-region clusters.' },
      { label: 'B', text: 'Memorystore Redis.' },
      {
        label: 'C',
        text: 'Cloud SQL for PostgreSQL with cross-region replicas.',
      },
      { label: 'D', text: 'Cloud Spanner multi-region.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 67,
    question:
      'Your company cannot afford planned downtime in December for a Cloud SQL MySQL instance and wants the most cost-effective solution. What should you do?',
    options: [
      { label: 'A', text: 'Open a support ticket to prevent maintenance.' },
      {
        label: 'B',
        text: 'Use Cloud SQL maintenance settings to defer maintenance.',
      },
      { label: 'C', text: 'Create read replicas in other zones.' },
      { label: 'D', text: 'Create a regional HA instance.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 68,
    question:
      'Your Cloud SQL MySQL application requires RTO and RPO in minutes and must survive zonal or regional failures. What architecture should you use?',
    options: [
      {
        label: 'A',
        text: 'Read replicas in different regions using asynchronous replication.',
      },
      {
        label: 'B',
        text: 'Read replicas in same region with synchronous replication.',
      },
      {
        label: 'C',
        text: 'Read replicas in different zones with synchronous replication and cross-region replicas with asynchronous replication.',
      },
      {
        label: 'D',
        text: 'Different zones async replication and cross-region synchronous replication.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (50%), A (45%)',
  },

  {
    id: 69,
    question:
      'Your hotel booking company must isolate PII data in Country A to meet residency requirements while maintaining efficient operations. What multi-tenancy pattern should you use?',
    options: [
      { label: 'A', text: 'Schema data management pattern.' },
      { label: 'B', text: 'Instance data management pattern.' },
      { label: 'C', text: 'Table data management pattern.' },
      { label: 'D', text: 'Database data management pattern.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (65%), D (24%)',
  },

  {
    id: 70,
    question:
      'Your company wants to use Cloud Spanner with automated scaling to handle increasing traffic and occasional spikes. What should you do?',
    options: [
      { label: 'A', text: 'Use linear scaling with Autoscaler architecture.' },
      { label: 'B', text: 'Use direct scaling with Autoscaler architecture.' },
      { label: 'C', text: 'Upgrade capacity periodically during maintenance.' },
      { label: 'D', text: 'Create alerts and manually upgrade capacity.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 71,
    question:
      'Your organization has a busy transactional Cloud SQL for MySQL instance. Your analytics team needs access to the data so they can build monthly sales reports. You need to provide data access without affecting performance. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a read replica and provide DB credentials to analytics team.',
      },
      {
        label: 'B',
        text: 'Create a read replica, enable cloudsql.iam_authentication, and grant read access.',
      },
      {
        label: 'C',
        text: 'Enable cloudsql.iam_authentication on the primary instance.',
      },
      {
        label: 'D',
        text: 'Provide credentials to the primary database instance.',
      },
    ],
    correctAnswer: 'B',
    communityVote: 'B (75%), A (25%)',
  },

  {
    id: 72,
    question:
      'Your organization stores marketing data in Bigtable. Performance issues occur daily between 9–10 AM for a specific dataset used by pilot users. What should you do to troubleshoot?',
    options: [
      { label: 'A', text: 'Separate users into different Bigtable instances.' },
      { label: 'B', text: 'Check Cloud Monitoring bytes_used metric.' },
      { label: 'C', text: 'Use Key Visualizer for Bigtable.' },
      { label: 'D', text: 'Add more nodes to the Bigtable cluster.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 73,
    question:
      'You are developing a global transactional application requiring ACID compliance and 99.999% availability. Which database should you choose?',
    options: [
      { label: 'A', text: 'Firestore.' },
      { label: 'B', text: 'Cloud Spanner.' },
      { label: 'C', text: 'Cloud SQL.' },
      { label: 'D', text: 'Bigtable.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 74,
    question:
      'You want to migrate a PostgreSQL database to Cloud SQL using Database Migration Service and assess known limitations. What should you check? (Choose two.)',
    options: [
      { label: 'A', text: 'Whether the database has over 512 tables.' },
      { label: 'B', text: 'Tables without primary keys.' },
      { label: 'C', text: 'Tables without foreign keys.' },
      { label: 'D', text: 'If the database uses pgcrypto extension.' },
      {
        label: 'E',
        text: 'If the source uses customer-managed encryption keys.',
      },
    ],
    correctAnswer: 'BE',
    communityVote: 'BE (77%), BD (23%)',
  },

  {
    id: 75,
    question:
      'A Firestore-backed Firebase app serves the same top ten news stories daily to a global audience. You want to optimize cost and latency. What should you do?',
    options: [
      { label: 'A', text: 'Enable serializable isolation.' },
      { label: 'B', text: 'Deploy US multi-region Firestore.' },
      {
        label: 'C',
        text: 'Build a Firestore bundle and deploy it to Cloud CDN.',
      },
      { label: 'D', text: 'Create a Firestore index on news story date.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 76,
    question:
      'You need to migrate a 1 TB PostgreSQL database from Compute Engine to Cloud SQL with minimal downtime. What should you do?',
    options: [
      { label: 'A', text: 'Export and import the database.' },
      { label: 'B', text: 'Use Migrate for Compute Engine.' },
      { label: 'C', text: 'Use Datastream.' },
      { label: 'D', text: 'Use Database Migration Service.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 77,
    question:
      'A large Cloud SQL PostgreSQL instance is not mission-critical. You want to reduce backup costs. What should you do?',
    options: [
      { label: 'A', text: 'Reduce backup frequency.' },
      { label: 'B', text: 'Switch backup storage from SSD to HDD.' },
      { label: 'C', text: 'Store backups in another region.' },
      { label: 'D', text: 'Reduce automated backup retention to two.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 78,
    question:
      'You identified inefficient queries using Cloud SQL Insights and need to determine which application generates them. What should you do?',
    options: [
      { label: 'A', text: 'Restart each application.' },
      { label: 'B', text: 'Scan database query logs.' },
      { label: 'C', text: 'Scan application logs.' },
      {
        label: 'D',
        text: 'Use query tags for application-centric monitoring.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 79,
    question:
      'You are launching a web application starting in one country but planning global expansion with 24/7 availability. What should you do?',
    options: [
      { label: 'A', text: 'Use Cloud Spanner regional configuration.' },
      { label: 'B', text: 'Use Cloud Spanner multi-region configuration.' },
      { label: 'C', text: 'Use Cloud SQL with cross-region replicas.' },
      { label: 'D', text: 'Use HA Cloud SQL.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (68%), B (32%)',
  },

  {
    id: 80,
    question:
      'You are migrating Oracle RAC databases to Google Cloud with minimal application changes. What should you do?',
    options: [
      { label: 'A', text: 'Migrate to Cloud Spanner.' },
      { label: 'B', text: 'Migrate to Compute Engine.' },
      { label: 'C', text: 'Migrate to Cloud SQL.' },
      { label: 'D', text: 'Migrate to Bare Metal Solution for Oracle.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 81,
    question:
      'You need to migrate Oracle, MySQL, SQL Server, and PostgreSQL databases to Google Cloud using managed services where possible. What should you do?',
    options: [
      { label: 'A', text: 'Move all to Cloud SQL.' },
      {
        label: 'B',
        text: 'Oracle/MySQL/SQL Server to Cloud SQL; PostgreSQL to Compute Engine.',
      },
      {
        label: 'C',
        text: 'MySQL/SQL Server/PostgreSQL to Compute Engine; Oracle to Bare Metal.',
      },
      {
        label: 'D',
        text: 'MySQL/SQL Server/PostgreSQL to Cloud SQL; Oracle to Bare Metal.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 82,
    question:
      'You need to test failover of a Cloud SQL PostgreSQL HA instance using gcloud. What command should you use?',
    options: [
      {
        label: 'A',
        text: 'gcloud sql instances failover <PrimaryInstanceName>',
      },
      {
        label: 'B',
        text: 'gcloud sql instances failover <ReplicaInstanceName>',
      },
      {
        label: 'C',
        text: 'gcloud sql instances promote-replica <PrimaryInstanceName>',
      },
      {
        label: 'D',
        text: 'gcloud sql instances promote-replica <ReplicaInstanceName>',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 83,
    question:
      'You generate weekly SQL reports using Python scripts and want to automate them with minimal cost and overhead. What should you do?',
    options: [
      { label: 'A', text: 'Use a VM with cron.' },
      { label: 'B', text: 'Use Cloud Composer.' },
      { label: 'C', text: 'Use Cloud Functions triggered by Cloud Scheduler.' },
      { label: 'D', text: 'Use Cloud Functions triggered by Cloud Tasks.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 84,
    question:
      'You want near-real-time replication from Cloud SQL MySQL to BigQuery using managed services. What should you do?',
    options: [
      { label: 'A', text: 'Create a custom replication service.' },
      { label: 'B', text: 'Use Cloud SQL federated queries.' },
      { label: 'C', text: 'Use Database Migration Service.' },
      { label: 'D', text: 'Use Datastream and Dataflow to BigQuery.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 85,
    question:
      'You are designing a physician portal with intermittent connectivity that should read cached data and support global scaling. What should you do?',
    options: [
      { label: 'A', text: 'Use Firestore with PersistenceEnabled=true.' },
      { label: 'B', text: 'Use Memorystore for Memcached.' },
      { label: 'C', text: 'Use Pub/Sub with Spanner.' },
      { label: 'D', text: 'Use Spanner exactStaleness reads.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 86,
    question:
      'You perform routine maintenance on a Cloud SQL for MySQL instance on Sundays at midnight, but want to skip maintenance during the year-end holiday season to ensure 24/7 availability. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Define a maintenance window on Sundays 12 AM–1 AM and deny maintenance periods between Nov 1 and Jan 15.',
      },
      {
        label: 'B',
        text: 'Define a maintenance window on Sundays 12 AM–5 AM and deny maintenance periods between Nov 1 and Feb 15.',
      },
      {
        label: 'C',
        text: 'Use Cloud Composer to control maintenance windows.',
      },
      { label: 'D', text: 'Use Cloud Scheduler to trigger maintenance jobs.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 87,
    question:
      'You need to migrate a 100 TB Microsoft SQL Server database to Google Cloud over a 1 Gbps link with 48 hours of downtime allowed. What should you do? (Choose two.)',
    options: [
      {
        label: 'A',
        text: 'Use a change data capture (CDC) migration strategy.',
      },
      { label: 'B', text: 'Move physical servers to Google Cloud.' },
      {
        label: 'C',
        text: 'Perform an offline migration using the 1 Gbps network.',
      },
      { label: 'D', text: 'Increase network bandwidth to 2 Gbps.' },
      { label: 'E', text: 'Increase network bandwidth to 10 Gbps.' },
    ],
    correctAnswer: 'AC',
    communityVote: 'AC (50%), AE (47%)',
  },

  {
    id: 88,
    question:
      'You must provision hundreds of Cloud SQL for MySQL instances that follow company naming conventions, flags, and tags. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a Dataflow job to automate instance creation.',
      },
      {
        label: 'B',
        text: 'Use Terraform scripts to automate instance creation.',
      },
      { label: 'C', text: 'Create instances manually in the Console.' },
      { label: 'D', text: 'Create clones from a template instance.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 89,
    question:
      'You are migrating 50 TB Oracle databases to Bare Metal Solution. Backups must allow quick restore and 5-year retention with RTO 2 hours and RPO 15 minutes. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Flash storage with flash backups and older backups in Actifio OnVault.',
      },
      {
        label: 'B',
        text: 'Flash storage DB, local backup on standard storage, older backups in Actifio OnVault.',
      },
      { label: 'C', text: 'Flash storage DB, backups to Coldline via RMAN.' },
      { label: 'D', text: 'Flash storage DB, backups to Archive Storage.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (52%), D (48%)',
  },

  {
    id: 90,
    question:
      'You need to grant developers permissions on a Cloud Spanner database to read tables, write rows, and add columns/indexes but not drop the database. What role should you assign?',
    options: [
      { label: 'A', text: 'Spanner Database Reader and Backup Writer.' },
      { label: 'B', text: 'Spanner Database Admin.' },
      { label: 'C', text: 'Spanner Database User.' },
      { label: 'D', text: 'Spanner Admin.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (88%)',
  },

  {
    id: 91,
    question:
      'You store sensitive data in Bigtable that must never be accessed from the public internet even with valid service account credentials. What should you do?',
    options: [
      { label: 'A', text: 'Use IAM for access control.' },
      { label: 'B', text: 'Use VPC Service Controls.' },
      { label: 'C', text: 'Use CMEK encryption.' },
      { label: 'D', text: 'Use Cloud Armor IP allowlist.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 92,
    question:
      'You need a relational analytics database capable of managing hundreds of terabytes for marketing reporting. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL.' },
      { label: 'B', text: 'BigQuery.' },
      { label: 'C', text: 'Cloud Spanner.' },
      { label: 'D', text: 'Bigtable.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (52%), C (48%)',
  },

  {
    id: 93,
    question:
      'You are using a multi-region Cloud Spanner instance but write performance is slower than in regional deployment. How can you improve write performance?',
    options: [
      {
        label: 'A',
        text: 'Place most read/write workloads near the leader region.',
      },
      { label: 'B', text: 'Use staleness reads of 15 seconds.' },
      { label: 'C', text: 'Add more replicas.' },
      { label: 'D', text: 'Keep CPU under 45%.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (87%)',
  },

  {
    id: 94,
    question:
      'You migrate Oracle databases to Google Cloud and need a cost-effective backup solution with RTO 2 hours and RPO 15 minutes. What should you do?',
    options: [
      { label: 'A', text: 'Bare Metal Oracle with on-prem tape backups.' },
      {
        label: 'B',
        text: 'Bare Metal Oracle with Actifio backups to Cloud Storage Nearline.',
      },
      {
        label: 'C',
        text: 'Bare Metal Oracle backups to Cloud Storage Standard.',
      },
      { label: 'D', text: 'Compute Engine Oracle with tape backups.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 95,
    question:
      'You migrate PostgreSQL and MySQL databases to Google Cloud. PostgreSQL requires multi-region backups and replicas, while MySQL must meet regional PII residency rules. What should you do?',
    options: [
      { label: 'A', text: 'Use Cloud Logging alerts and manual validation.' },
      {
        label: 'B',
        text: 'Use different organizations for each database type.',
      },
      { label: 'C', text: 'Use Pub/Sub alerts for instance creation.' },
      {
        label: 'D',
        text: 'Use different projects and apply organization policy constraints.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 96,
    question:
      'During a failover test a replica was promoted to primary. You now want to restore the original architecture. What should you do?',
    options: [
      { label: 'A', text: 'Bring DB-1 back online.' },
      { label: 'B', text: 'Delete DB-1 and recreate as replica.' },
      { label: 'C', text: 'Delete DB-2 so DB-1 becomes primary.' },
      { label: 'D', text: 'Create DB-4 as replica and promote it to primary.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (48%)',
  },

  {
    id: 97,
    question:
      'You need a fully managed relational database supporting global transactions and 99.99% availability across regions. What should you use?',
    options: [
      { label: 'A', text: 'Bigtable.' },
      { label: 'B', text: 'Firestore.' },
      { label: 'C', text: 'Cloud SQL.' },
      { label: 'D', text: 'Cloud Spanner.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 98,
    question:
      'Your Cloud SQL PostgreSQL queries are slow. You need to analyze query performance. What should you do?',
    options: [
      { label: 'A', text: 'View Cloud SQL operations.' },
      { label: 'B', text: 'Use Logs Explorer.' },
      { label: 'C', text: 'Review application logs.' },
      { label: 'D', text: 'Use Query Insights dashboard.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 99,
    question:
      'You want a highly available Cloud SQL PostgreSQL environment with automatic failover. What should you do?',
    options: [
      { label: 'A', text: 'Regional instance with cross-region replica.' },
      { label: 'B', text: 'Regional instance with standby in another zone.' },
      { label: 'C', text: 'Two read-write instances across zones.' },
      { label: 'D', text: 'Two read-write instances across regions.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (88%)',
  },

  {
    id: 100,
    question:
      'You discovered a Cloud SQL MySQL instance without HA enabled. How should you enable HA following Google best practices?',
    options: [
      { label: 'A', text: 'Create new instance with HA and migrate data.' },
      { label: 'B', text: 'Use Cloud Data Fusion migration.' },
      {
        label: 'C',
        text: 'Use gcloud instances patch to update the instance.',
      },
      { label: 'D', text: 'Shut down instance and enable HA.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },
  {
    id: 101,
    question:
      'You need to migrate an on-premises PostgreSQL database to Cloud SQL for PostgreSQL with minimal downtime. What should you do?',
    options: [
      { label: 'A', text: 'Export the database and import it into Cloud SQL.' },
      {
        label: 'B',
        text: 'Use Database Migration Service for continuous replication.',
      },
      { label: 'C', text: 'Copy data manually using scripts.' },
      { label: 'D', text: 'Use BigQuery Data Transfer Service.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 102,
    question:
      'You need to store semi-structured JSON data with high scalability and low latency for a mobile application. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Cloud Spanner' },
      { label: 'C', text: 'Firestore' },
      { label: 'D', text: 'BigQuery' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 103,
    question:
      'Your company needs a database that can scale horizontally to handle millions of writes per second with low latency. What should you choose?',
    options: [
      { label: 'A', text: 'BigQuery' },
      { label: 'B', text: 'Cloud Spanner' },
      { label: 'C', text: 'Cloud SQL' },
      { label: 'D', text: 'Bigtable' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 104,
    question:
      'You need to run analytical queries on petabytes of data with serverless infrastructure. What should you use?',
    options: [
      { label: 'A', text: 'BigQuery' },
      { label: 'B', text: 'Cloud SQL' },
      { label: 'C', text: 'Firestore' },
      { label: 'D', text: 'Cloud Spanner' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 105,
    question:
      'You want to automatically scale a NoSQL document database for a web application without managing infrastructure. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Firestore' },
      { label: 'C', text: 'Bigtable' },
      { label: 'D', text: 'Spanner' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 106,
    question:
      'You need to perform real-time analytics on streaming data in Google Cloud. Which service should you use?',
    options: [
      { label: 'A', text: 'BigQuery with streaming inserts' },
      { label: 'B', text: 'Cloud SQL' },
      { label: 'C', text: 'Firestore' },
      { label: 'D', text: 'Cloud Storage' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 107,
    question:
      'You want to replicate Cloud SQL data to another region for disaster recovery. What should you do?',
    options: [
      { label: 'A', text: 'Create a cross-region read replica.' },
      { label: 'B', text: 'Use BigQuery export.' },
      { label: 'C', text: 'Create a second standalone instance.' },
      { label: 'D', text: 'Use Cloud Functions.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 108,
    question:
      'You need to analyze slow SQL queries in a Cloud SQL instance. What tool should you use?',
    options: [
      { label: 'A', text: 'Cloud Logging' },
      { label: 'B', text: 'Query Insights' },
      { label: 'C', text: 'Stackdriver Trace' },
      { label: 'D', text: 'Cloud Profiler' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 109,
    question:
      'You want to automatically back up your Cloud SQL instance and allow point-in-time recovery. What should you enable?',
    options: [
      { label: 'A', text: 'Automated backups and binary logging.' },
      { label: 'B', text: 'Manual backups.' },
      { label: 'C', text: 'Export to Cloud Storage.' },
      { label: 'D', text: 'Snapshot backups.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 110,
    question:
      'Your application requires strongly consistent global transactions with relational schema support. What database should you choose?',
    options: [
      { label: 'A', text: 'Bigtable' },
      { label: 'B', text: 'Firestore' },
      { label: 'C', text: 'Cloud Spanner' },
      { label: 'D', text: 'BigQuery' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 111,
    question:
      'You need to migrate a large MySQL database to Cloud SQL with minimal downtime. Which tool should you use?',
    options: [
      { label: 'A', text: 'Database Migration Service' },
      { label: 'B', text: 'Dataflow' },
      { label: 'C', text: 'Dataproc' },
      { label: 'D', text: 'BigQuery Transfer Service' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 112,
    question:
      'You need a fully managed NoSQL wide-column database for large analytical and operational workloads. What should you use?',
    options: [
      { label: 'A', text: 'Firestore' },
      { label: 'B', text: 'Cloud SQL' },
      { label: 'C', text: 'Bigtable' },
      { label: 'D', text: 'BigQuery' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 113,
    question:
      'You want to protect Cloud SQL instances from accidental deletion. What should you enable?',
    options: [
      { label: 'A', text: 'Deletion protection' },
      { label: 'B', text: 'IAM roles' },
      { label: 'C', text: 'Cloud Logging' },
      { label: 'D', text: 'VPC Service Controls' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 114,
    question:
      'Your application needs to store time-series data with high throughput and low latency. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Bigtable' },
      { label: 'C', text: 'Firestore' },
      { label: 'D', text: 'BigQuery' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 115,
    question:
      'You want to export Cloud SQL data to BigQuery for analytics. What should you do?',
    options: [
      { label: 'A', text: 'Use Cloud Data Fusion' },
      {
        label: 'B',
        text: 'Use Cloud SQL export to Cloud Storage then load into BigQuery',
      },
      { label: 'C', text: 'Use Pub/Sub' },
      { label: 'D', text: 'Use Dataflow streaming pipeline' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 116,
    question:
      'You need to monitor performance metrics such as CPU, memory, and query latency for Cloud SQL. What service should you use?',
    options: [
      { label: 'A', text: 'Cloud Monitoring' },
      { label: 'B', text: 'Cloud Logging' },
      { label: 'C', text: 'Error Reporting' },
      { label: 'D', text: 'Cloud Trace' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 117,
    question:
      'You are configuring the networking of a Cloud SQL instance. The only application that connects to this database resides on a Compute Engine VM in the same project as the Cloud SQL instance. The VM and the Cloud SQL instance both use the same VPC network, and both have an external (public) IP address and an internal (private) IP address. You want to improve network security. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Disable and remove the internal IP address assignment.',
      },
      {
        label: 'B',
        text: 'Disable both the external IP address and the internal IP address, and instead rely on Private Google Access.',
      },
      {
        label: 'C',
        text: 'Specify an authorized network with the CIDR range of the VM.',
      },
      {
        label: 'D',
        text: 'Disable and remove the external IP address assignment.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 118,
    question:
      'You are managing two different applications: Order Management and Sales Reporting. Both applications interact with the same Cloud SQL for MySQL database. The Order Management application reads and writes to the database 24/7, but the Sales Reporting application is read-only. Both applications need the latest data. You need to ensure that the performance of the Order Management application is not affected by the Sales Reporting application. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a read replica for the Sales Reporting application.',
      },
      {
        label: 'B',
        text: 'Create two separate databases in the instance, and perform dual writes from the Order Management application.',
      },
      {
        label: 'C',
        text: 'Use a Cloud SQL federated query for the Sales Reporting application.',
      },
      {
        label: 'D',
        text: 'Queue up all the requested reports in Pub/Sub, and execute the reports at night.',
      },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 119,
    question:
      'You are the DBA of an online tutoring application that runs on a Cloud SQL for PostgreSQL database. You are testing cross-regional failover configuration. After failing over from region R1 to region R2 some application scenarios fail, though queries run fine directly on the DB. The application works normally again after failback to R1. What should you do to identify the cause?',
    options: [
      {
        label: 'A',
        text: 'Check whether Cloud SQL PostgreSQL versions differ in R1 and R2.',
      },
      {
        label: 'B',
        text: 'Check whether database patches differ between R1 and R2.',
      },
      { label: 'C', text: 'Check whether failover is still in progress.' },
      {
        label: 'D',
        text: 'Determine whether region R2 is a near-real-time copy but not an exact copy of region R1.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (47%)',
  },

  {
    id: 120,
    question:
      'Your company wants to migrate MySQL, PostgreSQL, and SQL Server databases from on-premises to Google Cloud with near-zero downtime and CDC support without application changes. What should you use?',
    options: [
      { label: 'A', text: 'Use native export and import.' },
      { label: 'B', text: 'Use database links.' },
      { label: 'C', text: 'Use Dataflow.' },
      { label: 'D', text: 'Use Database Migration Service.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 121,
    question:
      'You manage a Cloud SQL PostgreSQL instance with a primary in region1 and a read replica in region2. Region1 fails. You want to restore availability with minimal data loss. What should you do?',
    options: [
      { label: 'A', text: 'Restore from backups in region3.' },
      { label: 'B', text: 'Restore from backups in region1.' },
      {
        label: 'C',
        text: 'Check replication lag metrics and promote the read replica in region2.',
      },
      {
        label: 'D',
        text: 'Check operational logs and run manual failover if needed.',
      },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 122,
    question:
      'Your Cloud SQL MySQL server certificate is expiring. You need to issue a new certificate without restarting the instance. What should you do?',
    options: [
      { label: 'A', text: 'Issue a rollback.' },
      { label: 'B', text: 'Create a new client certificate.' },
      { label: 'C', text: 'Create a new server certificate.' },
      { label: 'D', text: 'Reset SSL configuration.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 123,
    question:
      'Your company runs Oracle RAC and Data Guard on-premises and wants minimal code changes with the same HA and low latency network. What should you do?',
    options: [
      { label: 'A', text: 'Migrate to Cloud Spanner.' },
      { label: 'B', text: 'Migrate to Cloud SQL.' },
      { label: 'C', text: 'Run Oracle on Compute Engine.' },
      { label: 'D', text: 'Use Bare Metal Solution for Oracle.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 124,
    question:
      'You need a global payments database that is horizontally scalable, strongly consistent, and provides 99.999% availability. What should you choose?',
    options: [
      { label: 'A', text: 'Bare Metal Solution.' },
      { label: 'B', text: 'Cloud SQL.' },
      { label: 'C', text: 'Bigtable.' },
      { label: 'D', text: 'Cloud Spanner.' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (89%)',
  },

  {
    id: 125,
    question:
      'Applications must access Cloud SQL PostgreSQL without passwords. What authentication should you use?',
    options: [
      { label: 'A', text: 'IAM authentication.' },
      { label: 'B', text: 'Managed Active Directory.' },
      { label: 'C', text: 'Cloud SQL federated queries.' },
      { label: 'D', text: 'PostgreSQL built-in authentication.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 126,
    question:
      'You are migrating a 2 TB PostgreSQL cluster to Compute Engine with minimal downtime. What migration strategy should you use?',
    options: [
      { label: 'A', text: 'Offline export and import.' },
      { label: 'B', text: 'Offline backup and restore.' },
      {
        label: 'C',
        text: 'Online backup, restore, and continuous WAL replication until sync completes.',
      },
      { label: 'D', text: 'Online export with WAL replication.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 127,
    question:
      'You have a SQL Server Cloud SQL instance with a cross-region replica and must maintain RPO < 5 minutes. How should you verify this?',
    options: [
      { label: 'A', text: 'Cloud SQL instance monitoring.' },
      { label: 'B', text: 'Cloud Monitoring metrics.' },
      { label: 'C', text: 'Cloud SQL logs.' },
      {
        label: 'D',
        text: 'SQL Server Always On Availability Group dashboard.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (67%)',
  },

  {
    id: 128,
    question:
      'You migrate PostgreSQL to Cloud SQL and need to withstand zonal failure with <5 minutes downtime and no data loss. What should you do?',
    options: [
      { label: 'A', text: 'Nightly snapshots.' },
      { label: 'B', text: 'CDC replication pipeline.' },
      { label: 'C', text: 'Cross-region read replica.' },
      { label: 'D', text: 'Enable High Availability (regional instance).' },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 129,
    question:
      'Your application VMs and Cloud SQL instances are in different projects. How should you configure networking?',
    options: [
      { label: 'A', text: 'VPC peering.' },
      { label: 'B', text: 'Shared VPC.' },
      { label: 'C', text: 'Default networks with VPN.' },
      { label: 'D', text: 'Default networks in both projects.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 130,
    question:
      'Terraform destroys and recreates environments causing the database to be deleted. How do you prevent this?',
    options: [
      { label: 'A', text: 'Set deletion_protection = true.' },
      { label: 'B', text: 'Rerun terraform apply.' },
      { label: 'C', text: 'Create a read replica.' },
      { label: 'D', text: 'Use PITR.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 131,
    question:
      'New users should have read-only access to a Cloud Spanner database. Which IAM role should you assign?',
    options: [
      { label: 'A', text: 'roles/spanner.databaseReader' },
      { label: 'B', text: 'roles/spanner.databaseUser' },
      { label: 'C', text: 'roles/spanner.viewer' },
      { label: 'D', text: 'roles/spanner.backupWriter' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 132,
    question:
      'Your database workload requires 40k reads/sec and 7k writes/sec. What is the most cost-effective Cloud Spanner configuration?',
    options: [
      { label: 'A', text: '4-node Spanner instance.' },
      { label: 'B', text: '6-node Spanner instance.' },
      { label: 'C', text: '1-node Spanner instance.' },
      { label: 'D', text: 'Multi-region instance.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 133,
    question:
      'You need a managed, low-latency pipeline to move MySQL data from on-premises into BigQuery. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Datastream → Cloud Storage → Dataflow → BigQuery.',
      },
      { label: 'B', text: 'Use Cloud Data Fusion.' },
      {
        label: 'C',
        text: 'Replicate into Cloud SQL and use federated queries.',
      },
      { label: 'D', text: 'Periodic extracts to Cloud Storage.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (67%)',
  },

  {
    id: 134,
    question:
      '100,000 sensors send 10 readings per second. You need real-time monitoring and analysis. Which database should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'BigQuery batch loads' },
      { label: 'C', text: 'Bigtable' },
      { label: 'D', text: 'Cloud Spanner' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 135,
    question:
      'You want to automate scheduled Firestore exports easily and cheaply. What should you do?',
    options: [
      { label: 'A', text: 'Compute Engine cron job.' },
      { label: 'B', text: 'Dataflow pipeline.' },
      { label: 'C', text: 'Cloud Scheduler → Cloud Function.' },
      { label: 'D', text: 'Firebase Admin SDK scheduling.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 136,
    question:
      'You need a globally distributed database with strong consistency, low latency, and zero downtime. What should you deploy?',
    options: [
      { label: 'A', text: 'Multi-region Cloud Spanner instance.' },
      { label: 'B', text: 'Bigtable multi-region.' },
      { label: 'C', text: 'Cloud SQL with replica.' },
      { label: 'D', text: 'AlloyDB HA.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 137,
    question:
      'Your company uses AlloyDB and expects reporting queries to increase. What read pool strategy should you use?',
    options: [
      { label: 'A', text: 'Run analytics on primary.' },
      { label: 'B', text: 'Resize read nodes.' },
      {
        label: 'C',
        text: 'Start with minimal read pools and scale based on load monitoring.',
      },
      { label: 'D', text: 'Single large read pool.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 138,
    question:
      'You deploy a 10GB Cloud SQL MySQL database for a non-critical application. Data updates nightly and must stay in one region. RTO = 1 day and cost should be minimal. What should you do?',
    options: [
      { label: 'A', text: 'Enable HA.' },
      { label: 'B', text: 'Same-zone read replica.' },
      { label: 'C', text: 'Cross-region read replica.' },
      {
        label: 'D',
        text: 'Disable HA and enable automated backups in the same region.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 139,
    question:
      'You are migrating a 10 TB relational database with sensitive customer data to Cloud SQL PostgreSQL. What should you do to secure the migration? (Choose two.)',
    options: [
      { label: 'A', text: 'Enable automatic patching and binary logging.' },
      {
        label: 'B',
        text: 'Use Private Service Connect between on-prem and Cloud SQL.',
      },
      { label: 'C', text: 'Use external IP and firewall rules.' },
      { label: 'D', text: 'Restrict access using IAM and internal IP.' },
      {
        label: 'E',
        text: 'Use Storage Transfer Service with client-side encryption.',
      },
    ],
    correctAnswer: 'BD',
    communityVote: 'BD (100%)',
  },
  {
    id: 140,
    question:
      'You are running a Cloud SQL for PostgreSQL 13 Enterprise Edition instance. During an audit, you discovered that the write-ahead logs used for point-in-time recovery (PITR) are stored on disk. You need to store PITR logs in a Cloud Storage bucket going forward without losing current PITR logs. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Clone the instance and create a new instance with PITR retention set to 30 days.',
      },
      {
        label: 'B',
        text: 'Change the transaction logs (WAL) retention period.',
      },
      { label: 'C', text: 'Upgrade the instance to Enterprise Plus Edition.' },
      { label: 'D', text: 'Disable PITR and then enable PITR again.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 141,
    question:
      'You need to store BigQuery data access audit logs for 6 months and ensure that only audit personnel can access them across all projects. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Enable data access logs in each project and restrict access via IAM.',
      },
      {
        label: 'B',
        text: 'Export logs to a Cloud Storage bucket in the analysts projects.',
      },
      {
        label: 'C',
        text: 'Export logs to a Cloud Storage bucket in a new project using project-level sink.',
      },
      {
        label: 'D',
        text: 'Use an aggregated export sink to export logs to a Cloud Storage bucket in a new audit project.',
      },
    ],
    correctAnswer: 'D',
    communityVote: 'D (100%)',
  },

  {
    id: 142,
    question:
      'Each analytics team runs BigQuery jobs in their own projects. You want them to monitor slot usage in their projects. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a Cloud Monitoring dashboard using the metric query/scanned_bytes.',
      },
      {
        label: 'B',
        text: 'Create a Cloud Monitoring dashboard using the metric slots/allocated_for_project.',
      },
      { label: 'C', text: 'Export logs to Cloud Storage and analyze usage.' },
      { label: 'D', text: 'Use Cloud Logging queries to monitor slots.' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 143,
    question:
      'You need to prevent hotspotting in Cloud Spanner when designing a primary key for high write workloads. What should you do?',
    options: [
      { label: 'A', text: 'Use a sequential numeric key.' },
      { label: 'B', text: 'Use timestamp-based keys.' },
      { label: 'C', text: 'Use a random UUID as the primary key.' },
      { label: 'D', text: 'Use monotonically increasing order IDs.' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 144,
    question:
      'You need a highly scalable NoSQL database for large analytical workloads with low latency access to structured data. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Cloud Spanner' },
      { label: 'C', text: 'Bigtable' },
      { label: 'D', text: 'Firestore' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 145,
    question:
      'Your application needs globally consistent relational database transactions with horizontal scalability. Which service should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Cloud Spanner' },
      { label: 'C', text: 'BigQuery' },
      { label: 'D', text: 'Firestore' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 146,
    question:
      'You need to migrate a multi-terabyte PostgreSQL database to BigQuery while maintaining referential integrity and preserving procedures. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Database Migration Service and rewrite procedures as BigQuery scripts.',
      },
      { label: 'B', text: 'Manually export tables using pgAdmin.' },
      { label: 'C', text: 'Use Cloud SQL export to CSV and load to BigQuery.' },
      { label: 'D', text: 'Use Storage Transfer Service directly.' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 147,
    question:
      'You want to protect sensitive BigQuery data from exfiltration outside your organization. What should you use?',
    options: [
      { label: 'A', text: 'Cloud Armor' },
      { label: 'B', text: 'VPC Service Controls' },
      { label: 'C', text: 'Private Google Access' },
      { label: 'D', text: 'Cloud NAT' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 148,
    question:
      'Your company needs encryption keys that they fully control for protecting data stored in BigQuery. What should you use?',
    options: [
      { label: 'A', text: 'Google-managed encryption keys' },
      { label: 'B', text: 'Customer-managed encryption keys in Cloud KMS' },
      { label: 'C', text: 'Customer-supplied encryption keys' },
      { label: 'D', text: 'Disk-level encryption only' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 149,
    question:
      'You need a serverless, globally scalable document database for mobile and web apps. What should you use?',
    options: [
      { label: 'A', text: 'Firestore' },
      { label: 'B', text: 'Cloud SQL' },
      { label: 'C', text: 'Bigtable' },
      { label: 'D', text: 'Cloud Spanner' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 150,
    question:
      'You want to analyze petabyte-scale data using SQL queries without managing infrastructure. What service should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Cloud Spanner' },
      { label: 'C', text: 'BigQuery' },
      { label: 'D', text: 'Bigtable' },
    ],
    correctAnswer: 'C',
    communityVote: 'C (100%)',
  },

  {
    id: 151,
    question:
      'You need to process streaming IoT data with extremely high throughput and low latency storage. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Bigtable' },
      { label: 'C', text: 'Firestore' },
      { label: 'D', text: 'Cloud Spanner' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 152,
    question:
      'You need a managed relational database compatible with PostgreSQL with automatic scaling and high performance. What should you choose?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'AlloyDB for PostgreSQL' },
      { label: 'C', text: 'Cloud Spanner' },
      { label: 'D', text: 'Bigtable' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 153,
    question:
      'You need to automatically scale relational database workloads globally while maintaining strong consistency. What should you use?',
    options: [
      { label: 'A', text: 'Cloud SQL' },
      { label: 'B', text: 'Cloud Spanner' },
      { label: 'C', text: 'Firestore' },
      { label: 'D', text: 'Bigtable' },
    ],
    correctAnswer: 'B',
    communityVote: 'B (100%)',
  },

  {
    id: 154,
    question:
      'You want to migrate MySQL workloads with minimal downtime and continuous replication to Cloud SQL. What should you use?',
    options: [
      { label: 'A', text: 'Database Migration Service' },
      { label: 'B', text: 'Storage Transfer Service' },
      { label: 'C', text: 'Cloud Data Fusion' },
      { label: 'D', text: 'Dataflow' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 155,
    question:
      'You want to analyze operational database data in BigQuery without copying the data. What should you use?',
    options: [
      { label: 'A', text: 'Federated queries' },
      { label: 'B', text: 'Dataflow pipelines' },
      { label: 'C', text: 'Cloud Functions' },
      { label: 'D', text: 'Cloud Composer' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 156,
    question:
      'You want to monitor database metrics and set alerts for performance issues in Google Cloud. What service should you use?',
    options: [
      { label: 'A', text: 'Cloud Monitoring' },
      { label: 'B', text: 'Cloud Logging' },
      { label: 'C', text: 'Error Reporting' },
      { label: 'D', text: 'Cloud Trace' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 157,
    question:
      'You want to capture real-time change data from MySQL databases and stream it into BigQuery for analytics. What service should you use?',
    options: [
      { label: 'A', text: 'Datastream' },
      { label: 'B', text: 'Database Migration Service' },
      { label: 'C', text: 'Cloud SQL export' },
      { label: 'D', text: 'Storage Transfer Service' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },

  {
    id: 158,
    question:
      'You need to automate periodic database backup exports using a serverless approach. What should you use?',
    options: [
      { label: 'A', text: 'Cloud Scheduler with Cloud Functions' },
      { label: 'B', text: 'Compute Engine cron job' },
      { label: 'C', text: 'Manual backup exports' },
      { label: 'D', text: 'Cloud Run scheduled job only' },
    ],
    correctAnswer: 'A',
    communityVote: 'A (100%)',
  },
  {
    id: 159,
    question:
      'You have a regional Spanner instance with no autoscaler serving production workload. During a promotional event, write activity surges and the database is close to the storage limit. Based on trends it will run out of storage in a few hours. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Create a custom instance configuration and add a custom read-only replica to the Spanner instance.',
      },
      {
        label: 'B',
        text: 'Increase the compute capacity of the Spanner instance.',
      },
      {
        label: 'C',
        text: 'Move the Spanner instance to a multi-regional configuration.',
      },
      {
        label: 'D',
        text: 'Archive and delete historical data from the database.',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 160,
    question:
      'Your organization deploys a high-volume, low-latency sensor data ingestion system. Resilience and growth are critical. Which database design on Google Cloud ensures performance and high availability?',
    options: [
      {
        label: 'A',
        text: 'Deploy multiple Bigtable clusters and manually shard data across them.',
      },
      {
        label: 'B',
        text: 'Deploy a single-zone Bigtable cluster optimized for write throughput.',
      },
      {
        label: 'C',
        text: 'Deploy a single-region Bigtable instance and increase nodes.',
      },
      {
        label: 'D',
        text: 'Provision a multi-zone Bigtable cluster with replication, stress testing, and monitoring.',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 161,
    question:
      'You are migrating an on-premises Oracle database to Cloud SQL for PostgreSQL. You need to convert schema, procedures, functions, and triggers with minimal manual effort. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Manually rewrite Oracle schema and queries for PostgreSQL.',
      },
      {
        label: 'B',
        text: 'Use a schema conversion tool, then manually rewrite queries.',
      },
      { label: 'C', text: 'Migrate data directly without conversion.' },
      {
        label: 'D',
        text: 'Use Database Migration Service code conversion workspace and refactor as needed.',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 162,
    question:
      'You use Memorystore for Redis to cache data. If a region fails and traffic moves to another region, you want the new region not to start with an empty cache. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Memorystore Standard Tier and disable read replicas.',
      },
      {
        label: 'B',
        text: 'Use Memorystore Standard Tier with a read replica.',
      },
      {
        label: 'C',
        text: 'Schedule exports and store them in a dual-region Cloud Storage bucket.',
      },
      { label: 'D', text: 'Enable Redis RDB snapshots.' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 163,
    question:
      'Your organization runs a high-volume low-latency application on Bigtable and wants to reduce costs without affecting performance. What should you do?',
    options: [
      { label: 'A', text: 'Reduce replication factor across clusters.' },
      {
        label: 'B',
        text: 'Consolidate multiple clusters into a single large cluster.',
      },
      {
        label: 'C',
        text: 'Analyze access patterns and redesign schema while adjusting node count.',
      },
      { label: 'D', text: 'Switch to a lower-performance storage type.' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 164,
    question:
      'A multi-region Spanner instance stores data from an application that performs many writes but few reads. You notice latency regression. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Enable leader-aware routing in the client library.',
      },
      { label: 'B', text: 'Add additional indexes.' },
      { label: 'C', text: 'Disable leader-aware routing.' },
      { label: 'D', text: 'Increase the number of nodes.' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 165,
    question:
      'You are designing an ecommerce app expecting bursty write volumes during sales periods. How should you configure Spanner to maintain performance?',
    options: [
      {
        label: 'A',
        text: 'Implement sharding across multiple Spanner instances.',
      },
      { label: 'B', text: 'Use read-only transactions.' },
      { label: 'C', text: 'Use interleaved tables.' },
      {
        label: 'D',
        text: 'Enable autoscaling and set maximum nodes for peak write volume.',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 166,
    question:
      'Your Cloud SQL for MySQL instance shows slow performance during peak hours. You suspect inefficient queries and want to analyze them. What should you do?',
    options: [
      { label: 'A', text: 'Use the underprovisioned instance recommender.' },
      { label: 'B', text: 'Increase read_buffer_size.' },
      { label: 'C', text: 'Enable Query Insights.' },
      { label: 'D', text: 'Create a Cloud Monitoring alert for queries.' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 167,
    question:
      'You are migrating PostgreSQL to Spanner and need to handle existing integer primary keys with minimal app changes. What should you do?',
    options: [
      { label: 'A', text: 'Use sequential integer values.' },
      { label: 'B', text: 'Set default values to max(primary_key)+1.' },
      { label: 'C', text: 'Use UUID v4 values.' },
      { label: 'D', text: 'Use BIT_REVERSED_POSITIVE sequences.' },
    ],
    correctAnswer: 'D',
  },
  {
    id: 168,
    question:
      'Your Cloud SQL MySQL table stores product descriptions. A chatbot must find the closest matching product for a user’s freeform text query. What should you do?',
    options: [
      { label: 'A', text: 'Use regex matching in stored procedures.' },
      {
        label: 'B',
        text: 'Create embeddings for product descriptions and perform ANN search.',
      },
      { label: 'C', text: 'Use LIKE operator.' },
      { label: 'D', text: 'Use SOUNDEX comparison.' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 169,
    question:
      'Your Cloud SQL MySQL Enterprise instance with four replicas needs an urgent security update during business downtime at 11 PM. What should you do?',
    options: [
      { label: 'A', text: 'Reschedule scheduled maintenance to 11 PM.' },
      {
        label: 'B',
        text: 'Perform self-service maintenance on read replicas.',
      },
      {
        label: 'C',
        text: 'Perform self-service maintenance on the primary instance.',
      },
      { label: 'D', text: 'Reschedule maintenance to apply immediately.' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 170,
    question:
      'You have a multi-region HA PostgreSQL cluster on Cloud SQL and want to test disaster recovery from a regional outage. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Promote the cross-region replica and verify application access.',
      },
      { label: 'B', text: 'Initiate failover to standby instance.' },
      { label: 'C', text: 'Restore backup in another region.' },
      { label: 'D', text: 'Run chaos engineering experiments.' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 171,
    question:
      'You are migrating an OLTP PostgreSQL database to Google Cloud with minimal admin overhead and analytics capability. What should you choose?',
    options: [
      { label: 'A', text: 'Spanner with PGAdapter.' },
      { label: 'B', text: 'Cloud SQL for PostgreSQL.' },
      { label: 'C', text: 'AlloyDB for PostgreSQL.' },
      { label: 'D', text: 'Self-managed PostgreSQL on Compute Engine.' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 172,
    question:
      'You are building a Python app connecting to AlloyDB, but security policy forbids username/password authentication. What should you do?',
    options: [
      { label: 'A', text: 'Use PostgreSQL client with IAP.' },
      {
        label: 'B',
        text: 'Use AlloyDB Python connector with IAM authentication.',
      },
      { label: 'C', text: 'Use SSL enforced connections.' },
      { label: 'D', text: 'Use service account as username/password.' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 173,
    question:
      "You are creating Cloud SQL for PostgreSQL instances in us-east1 and us-east4 using private IP addresses. You are using a Shared VPC network but receive a 'Network association failed' error. What should you do?",
    options: [
      {
        label: 'A',
        text: 'Use the Google Cloud console to assign private IP.',
      },
      {
        label: 'B',
        text: 'Enable the Service Networking API for host and service projects.',
      },
      {
        label: 'C',
        text: 'Configure Private Services Access before assigning a private IP.',
      },
      {
        label: 'D',
        text: 'Assign the private IP using gcloud sql instances patch command.',
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 174,
    question:
      'Your company is migrating a monolithic application to microservices on Google Cloud. A GKE authentication service needs to access Cloud SQL for PostgreSQL, and developers also need local access. You need a centralized and secure connectivity strategy. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Cloud SQL Auth Proxy for applications and database-native username/password for developers.',
      },
      {
        label: 'B',
        text: 'Enable public IP and restrict access using firewall rules.',
      },
      {
        label: 'C',
        text: 'Create database-native credentials and store them in a secret manager.',
      },
      {
        label: 'D',
        text: 'Use IAM service accounts with Workload Identity for services and IAM authentication with Cloud SQL Auth Proxy for developers.',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 175,
    question:
      'You export BAK files daily from Cloud SQL for SQL Server to Cloud Storage using a gcloud command at 6 AM. You want to automate this using managed Google Cloud services. What should you do?',
    options: [
      { label: 'A', text: 'Enable retained backups for the instance.' },
      {
        label: 'B',
        text: 'Create a Cloud Run function triggered by Pub/Sub and schedule it with Cloud Scheduler.',
      },
      { label: 'C', text: 'Enable automated backups with 7-day retention.' },
      {
        label: 'D',
        text: 'Create a cron job and configure Pub/Sub as the target.',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 176,
    question:
      'You have several on-premises Percona Server for MySQL 8.0 instances with multi-terabyte data and read-heavy workloads. You want to migrate to Google Cloud with minimal downtime and changes. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Database Migration Service to migrate to AlloyDB.',
      },
      {
        label: 'B',
        text: 'Use Datastream to migrate to Cloud SQL Enterprise.',
      },
      { label: 'C', text: 'Use spanner-migration-tool to migrate to Spanner.' },
      {
        label: 'D',
        text: 'Use Database Migration Service to migrate to Cloud SQL Enterprise Plus.',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 177,
    question:
      'You are migrating a global ecommerce PostgreSQL platform with stored procedures to Google Cloud. The platform requires RTO of 5 minutes and RPO of 30 seconds, with global read access but primary transactional data in one region. What should you do?',
    options: [
      { label: 'A', text: 'Deploy a multi-region Spanner instance.' },
      {
        label: 'B',
        text: 'Deploy AlloyDB in the primary region with HA and cross-region read replicas.',
      },
      {
        label: 'C',
        text: 'Deploy a single-region AlloyDB cluster with a replica in the same zone.',
      },
      {
        label: 'D',
        text: 'Deploy multi-region Cloud SQL PostgreSQL with async replication.',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 178,
    question:
      'Your Cloud SQL PostgreSQL instance serves transactional users while analytics queries consume most CPU. Reporting queries include complex joins and large tables. You need better analytics performance without affecting transactions. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Upgrade Cloud SQL Enterprise Edition and run all queries on the primary instance.',
      },
      {
        label: 'B',
        text: 'Migrate to AlloyDB and upgrade primary to 32 vCPU with materialized views.',
      },
      {
        label: 'C',
        text: 'Migrate to AlloyDB with columnar engine and use read pools for analytical queries.',
      },
      {
        label: 'D',
        text: 'Upgrade Cloud SQL instance and implement PgBouncer.',
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 179,
    question:
      'Your company wants to migrate product catalog data from DynamoDB to Bigtable with minimal downtime and effort while maintaining consistency. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Export DynamoDB to CSV, upload to Cloud Storage, and import using cbt CLI.',
      },
      {
        label: 'B',
        text: 'Use a Dataflow pipeline with DynamoDBIO and BigtableIO connectors.',
      },
      { label: 'C', text: 'Develop a custom migration script using APIs.' },
      { label: 'D', text: 'Use Dataproc to export and load data.' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 180,
    question:
      'You are designing a cache for tracking products browsed by users on an ecommerce site using a key-value database. It must support multiple VPC networks, high throughput, low latency, and managed service. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Use Bigtable with Private Google Access API endpoints.',
      },
      {
        label: 'B',
        text: 'Use Memorystore for Redis Cluster with Private Service Connect.',
      },
      {
        label: 'C',
        text: 'Use Memorystore Redis with Private Service Access.',
      },
      { label: 'D', text: 'Deploy Redis on a VM in a Shared VPC.' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 181,
    question:
      'You run a mission-critical application on GKE connecting to Cloud SQL PostgreSQL using private IP. You want to maximize uptime during planned maintenance without major application changes. What should you do?',
    options: [
      { label: 'A', text: 'Enable automated backups with 365-day retention.' },
      { label: 'B', text: 'Create a cross-region read replica.' },
      { label: 'C', text: 'Upgrade to Cloud SQL Enterprise Plus edition.' },
      { label: 'D', text: 'Set up maintenance notifications.' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 182,
    question:
      'Your IoT platform ingests data from 100k devices into Bigtable with 2M writes/sec. You observe hotspotting due to row key design. You also want to reduce storage cost while maintaining <10ms read latency. What should you do?',
    options: [
      {
        label: 'A',
        text: 'Add a hash prefix to row keys, configure autoscaling thresholds, and move data older than 6 months to Cloud Storage.',
      },
      {
        label: 'B',
        text: 'Split tables by device type and use multiple instances.',
      },
      {
        label: 'C',
        text: 'Keep row key deviceId#timestamp and enable autoscaling.',
      },
      {
        label: 'D',
        text: 'Increase cluster to 20 nodes and enable compression.',
      },
    ],
    correctAnswer: 'A',
  },
];
