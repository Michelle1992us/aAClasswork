require 'rails_helper'

RSpec.describe User, type: :model do
  # subject(:user) {FactoryBot.create(:user)}
  subject(:user) {User.create(username: 'Zac', password: 'password')}

  
  it {should validate_presence_of(:username)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_presence_of(:session_token)}
  it {should validate_length_of(:password).is_at_least(6)}


  it {should validate_uniqueness_of(:username)}
  it {should validate_uniqueness_of(:session_token)}

  it {should have_db_index(:session_token)}
  it {should have_db_index(:username)}

  it { should have_db_column(:username) }
  it { should have_db_column(:password_digest) }
  it { should have_db_column(:session_token) }



  describe 'associations' do
    it {should have_many(:goals)}
  end

  describe '#password_encryption' do
    it 'does not save password to the database' do
      User.create(username: 'Zac', password: 'password')
      user = User.find_by(username: 'Zac')
      expect(user.password).not_to eq('password')
    end

    it 'ensure password is encrypted using Bcrypt' do
      expect(BCrypt::Password).to receive(:create).with('123456')
      User.new(username: 'Zac', password: '123456')
    end
  end



end
