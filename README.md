1. METHOD GET : 
	##1.1. LẤY TẤT CẢ SẢN PHẨM : http://localhost:3000/api/products

	##1.2. FILTER SẢN PHẨM: 
			Ví dụ theo tên & giá:
	http://localhost:3000/api/products?price=100000&name=Cherry Brazil

	##1.3. LỌC SẢN PHẨM THEO KHOẢNG GIÁ (Thêm hậu tố lte)
			Ví dụ lấy giá trong khoảng 50k -> 150k. 
	http://localhost:3000/api/products?price_lte=50000&price_lte=150000

	##1.4. SẮP XẾP GIÁ BÁN GIẢM DẦN :
	http://localhost:3000/api/products?_sort=price&_order=desc

	##1.5. TÌM KIẾM SẢN PHẨM : 
	http://localhost:3000/api/products?q=Cherry

	##1.6. PHÂN TRANG.
	Lấy trang đầu tiên với 8 sản phẩm :
	http://localhost:3000/api/products?_page=1&_limit=8
