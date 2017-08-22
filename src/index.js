import React from 'react';
import HelloWorld from './HelloWorld';

class Extension {
  constructor(critic) {
    this.critic = critic;
    this.review_panel = <HelloWorld />;
    this.name = "HelloWorld";
  }

  install() {
    this.critic.addReviewPanel(this.review_panel);
  }

  uninstall() {
    this.critic.removeReviewPanel(this.review_panel);
  }
}

export default Extension;
