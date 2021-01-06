require 'rails_helper'

RSpec.describe User, type: :model do
  it {should validate_presence_of(:username)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_presence_of(:session_token)}
  it {should validate_presence_of(:timestamps)}
  it {should validate_length_of(:password).is_at_least(6)}

  it {should validate_uniqueness_of(:username)}
  it {should validate_uniqueness_of(:session_token)}

  describe 'associations' do
    it {should have_many(:goals)}
  end

  describe '#password_encryption' do
    it 'does not save password to the database' do
      FactoryBot.create(:user, username: 'Diglet')
      user = User.find_by(username: 'Diglet')
      expect(user.password).not_to eq('password')
    end

    it 'ensure password is encrypted using Bcrypt' do
      expect(Bcrypt::Password).to receive(:create).with('123456')
      FactoryBot.build(:user, password: '123456')
    end
  end




end
