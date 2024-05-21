import { TransactionController } from '@/controllers/tx.controller';
import { uploader } from '@/lib/uploader';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/organizer',
      this.transactionController.getTransactionsController,
    );
    this.router.post(
      '/',
      uploader('IMG', '/txProof').array('paymentProof', 1),
      this.transactionController.createTransaction,
    );
    this.router.get(
      '/:id',
      this.transactionController.getTransactionController,
    );
    this.router.patch(
      '/:id',
      uploader('IMG', '/txProof').array('paymentProof', 1),
      this.transactionController.updateTransactionController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}