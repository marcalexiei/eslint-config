export class MyClass {
  property: unknown;

  constructor() {
    this.property = 'string';
  }

  publicMethod(): unknown {
    return this.property;
  }

  publicMethodAlternative(): string;
  publicMethodAlternative(): unknown {
    return this.property;
  }
}
