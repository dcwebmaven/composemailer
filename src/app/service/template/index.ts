import { BaseTemplate } from './basetemplate/index';
import { ParagraphTemplate } from './paragraph/index';
import { ListTemplate } from './list/index';
import { SpotlightTemplate } from './spotlight/index';
import { TitleTemplate } from './title/index';
import { AddressTemplate } from './address/index';
import { HtmlParagraphTemplate } from './htmlparagraph/index';
import { ActivityTemplate } from './activity/index';
import { TableTemplate } from './table/index';

export class TemplateFactory {
  // Factory Method
  static getTemplateClass(data): BaseTemplate {
    let templateClass;
    switch(data.key) {
      case 'activity':
        templateClass = new ActivityTemplate(data);
        break;
      case 'table':
        templateClass = new TableTemplate(data);
        break;
      case 'paragraph':
        templateClass = new ParagraphTemplate(data);
        break;
      case 'htmlparagraph':
        templateClass = new HtmlParagraphTemplate(data);
        break;
      case 'list':
        templateClass = new ListTemplate(data);
        break;
      case 'spotlight':
        templateClass = new SpotlightTemplate(data);
        break;
      case 'address':
        templateClass = new AddressTemplate(data);
        break;
      case 'title':
        templateClass = new TitleTemplate(data);
        break;
    }
    return templateClass;
  }
}