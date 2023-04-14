import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/LocationsList"
import { ProductList } from "../../products/ProductList"
import { ProductForm } from "../../products/ProductForm"
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

			<Route path="products" element={ <ProductList /> } />
			<Route path="product/create" element={ <ProductForm />} />
		</Route>

	</Routes>
	)
}
