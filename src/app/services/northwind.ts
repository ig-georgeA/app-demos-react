import { CustomersType } from '../models/Northwind/customers-type';
import { EmployeesType } from '../models/Northwind/employees-type';

export async function getCustomers(): Promise<CustomersType[]> {
	const response = await fetch('../../static-data/northwind-customers-type.json');
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function getEmployees(): Promise<EmployeesType[]> {
	const response = await fetch('../../static-data/northwind-employees-type.json');
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}
