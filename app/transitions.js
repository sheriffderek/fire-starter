export default function() {
  // Add your transitions here, like:
    this.transition(
      // this.fromRoute('style-guide'),
      // this.toRoute('welcome'),
      this.use('fade'),
      this.reverse('fade'),
    );
}
