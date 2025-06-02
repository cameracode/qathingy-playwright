import { Page } from '@playwright/test';

export class TestPage {
  constructor(public page: Page, public endpoint: string) {
    // Initialize as needed
  }
} 