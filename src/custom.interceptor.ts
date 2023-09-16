import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/operators';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    // console.log('THIS IS INTERCEPTING THE REQUEST!'); // You can see the context here and work with it.
    return handler.handle().pipe(
      map((data) => {
        // console.log('THIS IS INTERCEPTING THE RESPONSE!');
        const response = {
          ...data,
          createdAt: data.created_at.toISOString().split('T')[0],
        };
        delete response.updated_at;
        return response;
      }),
    );
    // return next.handle().pipe(tap(() => console.log('After...')));
  }
}
