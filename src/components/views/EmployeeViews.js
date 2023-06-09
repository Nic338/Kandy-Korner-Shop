import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/LocationsList"
import { ProductList } from "../../products/ProductList"
import { ProductForm } from "../../products/ProductForm"
import { EmployeeForm } from "../employees/EmployeeForm"
import { EmployeeList } from "../employees/EmployeeList"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"
import { Profile } from "../profile/Profile"

export const EmployeeViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>Kandy Korner Candy Shop</h1>
				<div>The Sweetest Place In Town</div>

				<Outlet />
			
			</>
		}>
			<Route path="locations" element={ <LocationsList /> } />
			<Route path="newemployees" element={ <EmployeeForm /> } />
			<Route path="products" element={ <ProductList /> } />
			<Route path="product/create" element={ <ProductForm />} />
			<Route path="employees" element={ <EmployeeList /> } />
			<Route path="customers" element={ <CustomerList /> } />
			<Route path="customers/:customerId" element={ <Profile /> } />

			

		</Route>

	</Routes>
	)
}
