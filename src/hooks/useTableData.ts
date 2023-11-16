import { ref } from 'vue';

export interface ISimpleTableData {
  city: string;
  totalOrders: string;
}

export interface IPaginatedTableData {
  picture: string;
  name: string;
  role: string;
  created: string;
  status: string;
  statusColor: string;
}

export interface IWideTableData {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

export function useTableData() {
  const simpleTableData = ref<ISimpleTableData[]>([
    { city: 'New York', totalOrders: '20,120' },
    { city: 'Manchester', totalOrders: '63,310' },
    { city: 'London', totalOrders: '45,110' },
    { city: 'Madrid', totalOrders: '13,524' },
  ]);

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Angali',
      role: 'Admin',
      created: 'Nov 12, 2023',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Balu',
      role: 'Editor',
      created: 'Nov 01, 2023',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Purna',
      role: 'Editor',
      created: 'Nov 10, 2023',
      status: 'Suspended',
      statusColor: 'orange',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
      name: 'Joe',
      role: 'Admin',
      created: 'Nov 15, 2023',
      status: 'Inactive',
      statusColor: 'red',
    },
  ]);
  //Inserting same data into table by using arrays
/*
  const wideTableData = ref<IWideTableData[]>(
    [...Array(5).keys()].map(() => ({
      name: 'John Doe',
      email: 'john@example.com',
      title: 'Software Engineer',
      title2: 'Web dev',
      status: 'Active',
      role: 'Owner',
    }))
  );
  */
 //Individually Inserting Data Into the table
  const wideTableData = ref<IWideTableData[]>([
    { name: 'John',
    email: 'john@example.com',
    title: 'Software Engineer',
    title2: 'Web dev',
    status: 'Active',
    role: 'Owner', 
  },
  { name: 'Alex',
    email: 'Alex@example.com',
    title: 'Software Developer',
    title2: 'Application dev',
    status: 'Active',
    role: 'Owner', 
  },
  { name: 'Prem',
    email: 'Prem@example.com',
    title: 'Software Tester',
    title2: 'Tester',
    status: 'Active',
    role: 'Owner', 
  },
    
  ]);

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  };
}
