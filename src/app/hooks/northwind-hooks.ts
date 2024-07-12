import { useCallback, useEffect, useState } from 'react';
import { CustomersType } from '../models/Northwind/customers-type';
import { EmployeesType } from '../models/Northwind/employees-type';
import { getCustomers, getEmployees } from '../services/northwind';

export const useGetCustomers = () => {
	const [customers, setCustomers] = useState<CustomersType[]>([]);

	const requestCustomers = useCallback(() => {
		let ignore = false;
		getCustomers()
			.then((data) => {
				if (!ignore) {
					setCustomers(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestCustomers();
	}, [requestCustomers]);

	return { requestNorthwindCustomers: requestCustomers, northwindCustomers: customers, setNorthwindCustomers: setCustomers};
}

export const useGetEmployees = () => {
	const [employees, setEmployees] = useState<EmployeesType[]>([]);

	const requestEmployees = useCallback(() => {
		let ignore = false;
		getEmployees()
			.then((data) => {
				if (!ignore) {
					setEmployees(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestEmployees();
	}, [requestEmployees]);

	return { requestNorthwindEmployees: requestEmployees, northwindEmployees: employees, setNorthwindEmployees: setEmployees};
}
