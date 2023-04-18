import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/LocationsList"
import { ProductList } from "../../products/ProductList"
import { ProductForm } from "../../products/ProductForm"
import { ProductContainer } from "../../products/ProductContainer"
import { OrderList } from "../orders/OrdersList"
export const CustomerViews = () => {
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
			<Route path="search" element={ <ProductContainer /> } />
			<Route path="products" element={ <ProductList /> } />
			<Route path="product/create" element={ <ProductForm />} />
			<Route path="orders" element={ <OrderList /> } />

		</Route>

	</Routes>
	)
}
