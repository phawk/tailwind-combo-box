class PagesController < ApplicationController
  def home
    @items = Person.all.map do |person|
      FancySelectComponent::Item.new(person.id, person.name, person.image_url)
    end
  end
end
