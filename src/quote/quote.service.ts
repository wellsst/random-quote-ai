import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from "@nestjs/axios";

@Injectable()
export class QuoteService {
  constructor(private httpService: HttpService) {}

  getRandomQuote(): Observable<any> {
    return this.httpService
      .get('https://api.quotable.io/random')
      .pipe(
      map((axiosResponse: AxiosResponse) => {
          const { content, author, tags } = axiosResponse.data;
          return { content, author, tags };
        })
      );
  }

  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  findAll() {
    return `This action returns all quote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quote`;
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }
}
