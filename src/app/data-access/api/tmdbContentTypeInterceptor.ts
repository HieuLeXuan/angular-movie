import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

export const tmdbContentTypeInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  return next(
    req.clone({
      setHeaders: { 'Content-Type': 'application/json;charset=utf-8' },
    })
  );
};

/* Đoạn mã bạn cung cấp định nghĩa một interceptor HTTP trong Angular sử dụng kiểu hàm mới (HttpInterceptorFn) để xử lý yêu cầu HTTP.
Đây là một cách đơn giản và hiệu quả để thêm các header vào các yêu cầu HTTP trong ứng dụng Angular. Dưới đây là giải thích chi tiết:

HttpHandlerFn: Loại đại diện cho hàm xử lý HTTP, nhận một yêu cầu và trả về một observable với kết quả của yêu cầu đó.
HttpInterceptorFn: Loại đại diện cho hàm interceptor HTTP, được sử dụng để thay đổi hoặc xử lý yêu cầu HTTP.
HttpRequest: Loại đại diện cho một yêu cầu HTTP.

tmdbContentTypeInterceptor: Định nghĩa một interceptor HTTP sử dụng HttpInterceptorFn.
req: Tham số đại diện cho yêu cầu HTTP gốc.
next: Tham số đại diện cho hàm xử lý tiếp theo trong chuỗi interceptor.
req.clone({...}): Tạo một bản sao của yêu cầu gốc với các thay đổi được áp dụng.
Trong trường hợp này, thêm hoặc cập nhật header Content-Type với giá trị "application/json;charset=utf-8".

next(...): Gọi hàm xử lý tiếp theo với yêu cầu đã được thay đổi.
Mục Đích
Interceptor này được thiết kế để đảm bảo rằng tất cả các yêu cầu HTTP gửi đi từ ứng dụng có header Content-Type được đặt là application/json;charset=utf-8.
Điều này thường được thực hiện để đảm bảo rằng dữ liệu gửi đến server được mã hóa đúng cách, đặc biệt khi gửi dữ liệu JSON.*/
