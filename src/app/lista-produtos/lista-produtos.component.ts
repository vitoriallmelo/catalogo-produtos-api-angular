import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProdutosService, Produto  } from '../services/produtos.service';


@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  errorMessage: string | null = null;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe({
      next: (produtos) => this.produtos = produtos,
      error: (err) => this.errorMessage = err.message
    });
  }
}
