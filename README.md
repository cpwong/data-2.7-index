# Data Testing Guide - Interactive Web App

An interactive educational web application demonstrating data testing using **Great Expectations** and **DBT Testing**.

## 🎯 Features

- **Interactive Tab Navigation**: Explore different sections covering Overview, Great Expectations, DBT Testing, and Complete Workflow
- **Collapsible Code Sections**: Click to expand/collapse installation steps and code examples
- **Copy Code Functionality**: Hover over code blocks to copy code snippets with one click
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Pastel Theme**: Clean, modern design with pastel color scheme
- **Smooth Animations**: Engaging scroll animations and transitions
- **Keyboard Navigation**: Use arrow keys to navigate between tabs
- **Progress Indicator**: Visual feedback showing scroll progress

## 🎨 Design Highlights

- **Pastel Color Palette**: Soft blues, purples, pinks, greens, and yellows for a professional look
- **Interactive Elements**: Hover effects, click animations, and visual feedback
- **Hint Boxes**: Highlighted tips and important information throughout
- **Code Syntax Highlighting**: Dark theme code blocks with copy functionality
- **Accessibility Features**: Focus management and keyboard navigation support

## 📚 Content Covered

### 1. Overview
- Introduction to data testing
- Overview of Great Expectations and DBT Testing
- Quick links to get started

### 2. Great Expectations
- Installation and setup guide
- Core concepts (Data Context, Data Sources, Data Assets, Batch Definitions)
- Creating expectations and validation suites
- Working with DataFrames
- Additional resources and documentation links

### 3. DBT Testing
- Installing dbt_utils and dbt-expectations packages
- Built-in DBT tests (unique, not_null, accepted_values, relationships)
- Extended test examples (accepted_range, expression_is_true, column type validation)
- Running DBT tests workflow
- Documentation and resources

### 4. Complete Workflow
- Recommended testing strategy
- When to use Great Expectations vs DBT Testing
- Example data pipeline with testing stages
- Orchestration with Dagster
- Best practices for data testing
- Key takeaways

## 🚀 How to Use

1. Open `index.html` in a modern web browser
2. Navigate through tabs using:
   - Click on tab buttons at the top
   - Use left/right arrow keys for keyboard navigation
3. Click on collapsible sections to expand installation steps and code examples
4. Hover over code blocks to reveal the "Copy" button
5. Click on hint boxes and tags for interactive feedback
6. Explore all sections to learn about data testing workflows

## 💡 Interactive Features

### Code Copy
- Hover over any code block to see the "Copy" button
- Click to copy code to clipboard
- Visual feedback confirms successful copy

### Collapsible Sections
- Click on section headers with arrows (▼) to expand/collapse
- Smooth animations for better user experience
- Maintains state during navigation

### Scroll Animations
- Cards animate into view as you scroll
- Smooth parallax effect on header
- Progress bar shows reading progress

### Keyboard Shortcuts
- **←/→ Arrow Keys**: Navigate between tabs
- **Tab Key**: Move through interactive elements
- **Enter/Space**: Activate buttons and links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables, gradients, and animations
- **Vanilla JavaScript**: Interactive functionality without dependencies
- **Responsive Design**: Mobile-first approach with media queries

## 📁 File Structure

```
data-testing-demo/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Documentation (this file)
```

## 🎓 Learning Objectives

After exploring this interactive guide, you will understand:

1. The importance of data testing in data quality management
2. How to set up and use Great Expectations for data validation
3. How to implement DBT testing in your data transformation workflows
4. When to use Great Expectations vs DBT Testing
5. Best practices for implementing comprehensive data testing
6. How to orchestrate data testing with tools like Dagster

## 🌟 Key Concepts Explained

### Great Expectations
- Framework for describing and validating data using expressive tests
- Works with files, databases, and data lakes
- Provides programmatic Python interface
- Includes data documentation capabilities

### DBT Testing
- Built-in testing framework for transformed data
- Extensible with packages like dbt_utils and dbt-expectations
- Validates schema, relationships, and business logic
- Integrates seamlessly with data transformation workflows

### Testing Strategy
- Use Great Expectations for raw data validation
- Use DBT Testing for transformed data verification
- Combine both for comprehensive data quality assurance
- Automate with orchestration tools for production workflows

## 🔗 External Resources

The app includes links to:
- [Great Expectations Documentation](https://docs.greatexpectations.io/)
- [dbt_utils Package](https://hub.getdbt.com/dbt-labs/dbt_utils/)
- [dbt-expectations Package](https://hub.getdbt.com/calogica/dbt_expectations/)
- [DBT Testing Documentation](https://docs.getdbt.com/docs/build/tests)

## 📱 Browser Compatibility

This web app works best on modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Usage Tips

1. **Start with Overview**: Get familiar with data testing concepts
2. **Explore Great Expectations**: Learn about validation workflows
3. **Study DBT Testing**: Understand transformation testing
4. **Review Complete Workflow**: See how everything fits together
5. **Practice**: Use the code examples in your own projects

## 📝 Notes

- All code examples are based on real-world use cases
- The pastel color scheme is designed for extended reading sessions
- Interactive elements encourage exploration and learning
- The app is fully self-contained with no external dependencies

## 🤝 Contributing

This is an educational resource. Feel free to:
- Suggest improvements
- Report issues
- Share with others learning data testing

---

**Built with ❤️ for data engineers and analysts learning data testing best practices**
