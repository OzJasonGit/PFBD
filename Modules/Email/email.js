class Email {
  constructor(emailData) {
    this.email = emailData.email;
    this.subscribedAt = emailData.subscribedAt || new Date();
    this.isActive = emailData.isActive !== undefined ? emailData.isActive : true;
    this.source = emailData.source || 'newsletter'; // newsletter, checkout, etc.
  }

  // You can add methods here if needed
  toJSON() {
    return {
      email: this.email,
      subscribedAt: this.subscribedAt,
      isActive: this.isActive,
      source: this.source
    };
  }
}

export default Email;

