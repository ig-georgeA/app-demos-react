import { useCallback, useEffect, useState } from 'react';
import { EmployeeDto } from '../models/IGNorthwindAPIv2/employee-dto';
import { OrderDto } from '../models/IGNorthwindAPIv2/order-dto';
import { CustomerDto } from '../models/IGNorthwindAPIv2/customer-dto';
import { OrderDetailDto } from '../models/IGNorthwindAPIv2/order-detail-dto';
import { ProductDto } from '../models/IGNorthwindAPIv2/product-dto';
import { getCustomerDto, getCustomerDtoList, getEmployeeDtoList, getOrderDetailDtoList, getOrderDtoList, getProductDtoList } from '../services/ignorthwind-apiv2';

export const useGetCustomerDtoList = () => {
	const [customerDto, setCustomerDto] = useState<CustomerDto[]>([]);

	const requestCustomerDto = useCallback(() => {
		let ignore = false;
		getCustomerDtoList()
			.then((data) => {
				if (!ignore) {
					setCustomerDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestCustomerDto();
	}, [requestCustomerDto]);

	return { requestIGNorthwindAPIv2CustomerDto: requestCustomerDto, iGNorthwindAPIv2CustomerDto: customerDto, setIGNorthwindAPIv2CustomerDto: setCustomerDto};
}

export const useGetCustomerDto = (id: string) => {
	const [customerDto, setCustomerDto] = useState<CustomerDto | undefined>();

	const requestCustomerDto = useCallback(() => {
		let ignore = false;
		getCustomerDto(id)
			.then((data) => {
				if (!ignore) {
					setCustomerDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, [id]);

	useEffect(() => {
		requestCustomerDto();
	}, [id, requestCustomerDto]);

	return { requestIGNorthwindAPIv2CustomerDto: requestCustomerDto, iGNorthwindAPIv2CustomerDto: customerDto, setIGNorthwindAPIv2CustomerDto: setCustomerDto};
}

export const useGetOrderDtoList = (id: string) => {
	const [orderDto, setOrderDto] = useState<OrderDto[]>([]);

	const requestOrderDto = useCallback(() => {
		let ignore = false;
		getOrderDtoList(id)
			.then((data) => {
				if (!ignore) {
					setOrderDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, [id]);

	useEffect(() => {
		requestOrderDto();
	}, [id, requestOrderDto]);

	return { requestIGNorthwindAPIv2OrderDto: requestOrderDto, iGNorthwindAPIv2OrderDto: orderDto, setIGNorthwindAPIv2OrderDto: setOrderDto};
}

export const useGetProductDtoList = (id: any) => {
	const [productDto, setProductDto] = useState<ProductDto[]>([]);

	const requestProductDto = useCallback(() => {
		let ignore = false;
		getProductDtoList(id)
			.then((data) => {
				if (!ignore) {
					setProductDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, [id]);

	useEffect(() => {
		requestProductDto();
	}, [id, requestProductDto]);

	return { requestIGNorthwindAPIv2ProductDto: requestProductDto, iGNorthwindAPIv2ProductDto: productDto, setIGNorthwindAPIv2ProductDto: setProductDto};
}

export const useGetOrderDetailDtoList = (id: any) => {
	const [orderDetailDto, setOrderDetailDto] = useState<OrderDetailDto[]>([]);

	const requestOrderDetailDto = useCallback(() => {
		let ignore = false;
		getOrderDetailDtoList(id)
			.then((data) => {
				if (!ignore) {
					setOrderDetailDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, [id]);

	useEffect(() => {
		requestOrderDetailDto();
	}, [id, requestOrderDetailDto]);

	return { requestIGNorthwindAPIv2OrderDetailDto: requestOrderDetailDto, iGNorthwindAPIv2OrderDetailDto: orderDetailDto, setIGNorthwindAPIv2OrderDetailDto: setOrderDetailDto};
}

export const useGetEmployeeDtoList = () => {
	const [employeeDto, setEmployeeDto] = useState<EmployeeDto[]>([]);

	const requestEmployeeDto = useCallback(() => {
		let ignore = false;
		getEmployeeDtoList()
			.then((data) => {
				if (!ignore) {
					setEmployeeDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestEmployeeDto();
	}, [requestEmployeeDto]);

	return { requestIGNorthwindAPIv2EmployeeDto: requestEmployeeDto, iGNorthwindAPIv2EmployeeDto: employeeDto, setIGNorthwindAPIv2EmployeeDto: setEmployeeDto};
}
