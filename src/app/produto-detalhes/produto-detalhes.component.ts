import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutosService, Produto} from '../services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink, ProdutosService],
  templateUrl: './produto-detalhes.component.html',
  styleUrl: './produto-detalhes.component.css'
})
export class ProdutoDetalhesComponent implements OnInit {
  produto: Produto | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtosService.getProduto(id).subscribe({
      next: (produto) => this.produto = produto,
      error: (err) => this.errorMessage = err.message
    });
  } 
}
