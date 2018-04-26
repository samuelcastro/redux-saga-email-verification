import * as React from 'react';

const withEmailSuggestion = (WrappedComponent: any) => {
    return class extends React.Component<any, any> {
      private $el: JQuery<HTMLElement>;

      public componentDidMount() {
        const el: string = `#${this.props.id}`;

        this.$el = $(el);

        $(document).ready(() => {
          (this.$el as any).autoEmail(this.props.domains, this.props.multiple);
        });

        this.$el.change((e: any) => setTimeout(() => this.props.onChange(e)))

        if (this.props.autoFocus) {
          this.$el.focus();
        }
      }

      public render() {
        return <WrappedComponent
          {...this.props}
        />
      }
   }
}

export default withEmailSuggestion;
