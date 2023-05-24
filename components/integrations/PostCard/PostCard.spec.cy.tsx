import PostCard from './PostCard';

describe('PostCard', () => {
  const data = {
    id: 1,
    image_url:
      'https://images.pexels.com/photos/16881619/pexels-photo-16881619/free-photo-of-nunca-tan-lejos-de-la-realidad.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    likes: 100,
    comments: 50,
    caption: 'Lorem ipsum dolor sit amet',
  };

  it('displays the post card correctly', () => {
    cy.mount(
      <PostCard
        data={data}
        selected={false}
        onRepost={() => {}}
        onSetAsProfilePic={() => {}}
        onSelect={() => {}}
      />
    );

    cy.get('[data-cy="post-card-1"]').should('exist');

    cy.get('[data-cy="post-card-image-1"]').should('be.visible');

    cy.get('[data-cy="post-card-likes-1"]').should('contain', '100');

    cy.get('[data-cy="post-card-comments-1"]').should('contain', '50');

    cy.get('[data-cy="post-card-profile-btn-1"]').click();

    cy.get('[data-cy="post-card-repost-btn-1"]').click();

    cy.get('[data-cy="post-card-select-btn-1"]').click();
  });
});
