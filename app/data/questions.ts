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
];
