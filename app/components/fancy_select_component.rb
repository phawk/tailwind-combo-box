# frozen_string_literal: true
class FancySelectComponent < ViewComponent::Base
  attr_reader :label, :items, :form_name

  def initialize(label:, form_name:, items: [])
    @label = label
    @form_name = form_name
    @items = items
  end

  class Item < Struct.new(:id, :label, :image_url); end
end
